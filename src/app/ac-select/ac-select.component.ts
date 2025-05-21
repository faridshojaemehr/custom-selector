import {
  Component,
  computed,
  forwardRef,
  input,
  model,
  OnInit,
  output,
  signal,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-select',
  imports: [FormsModule],
  templateUrl: './ac-select.component.html',
  styleUrl: './ac-select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AcSelectComponent),
      multi: true,
    },
  ],
})
export class AcSelectComponent implements OnInit, ControlValueAccessor {
  items = input<any[]>([]);
  multiple = input<boolean>(false);
  label = input<string | null>(null);
  search$ = new BehaviorSubject<any>(null);
  isSelectOpened = signal<boolean>(false);
  selectedItems = signal<any[] | null>([]);
  itemList = signal<any[]>([]);
  isExpanded = signal<boolean>(false);
  selectionChange = output<any[] | null>();
  valueKey = input<string>('');
  placeholder = input<string>('');
  private _items = computed(() => this.items());
  ngOnInit(): void {
    this.search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((val) => {
          if (val) {
            const filteredItems = this.items().filter((item) =>
              item[this.valueKey()].toLowerCase().includes(val.toLowerCase())
            );
            return this.itemList.set(
              this.isExpanded() ? filteredItems : filteredItems.slice(0, 5)
            );
          } else {
            return this.itemList.set(
              this.isExpanded() ? this.items() : this.items().slice(0, 5)
            );
          }
        })
      )
      .subscribe();
  }

  toggle() {
    this.isSelectOpened.update((prev) => !prev);
    this.onTouched();
  }

  onSelectItem(item: any) {
    if (this.multiple()) {
      const selectedItems = this.selectedItems() || [];
      if (selectedItems.includes(item)) {
        this.selectedItems.set(
          selectedItems.filter(
            (c) => c[this.valueKey()] !== item[this.valueKey()]
          )
        );
      } else {
        this.selectedItems.set([...selectedItems, item]);
      }
      this.selectionChange.emit(this.selectedItems() || []);
      this.onChange(this.selectedItems());
    } else {
      this.selectedItems.set([item]);
      this.selectionChange.emit(item);
      this.onChange(item);
      this.isSelectOpened.set(false);
    }
    this.onTouched();
  }

  clear(item: any) {
    if (this.multiple()) {
      const selectedItems = this.selectedItems() || [];
      this.selectedItems.set(
        selectedItems.filter(
          (c: any) => c[this.valueKey()] !== item[this.valueKey()]
        )
      );
      this.selectionChange.emit(this.selectedItems() || []);
      this.onChange(this.selectedItems());
    } else {
      this.selectedItems.set([]);
      this.selectionChange.emit(null);
      this.onChange(null);
    }
    this.itemList.set(this._items().slice(0, 5));
    this.isSelectOpened.set(false);
  }

  onToggleItem() {
    this.isSelectOpened.update((prev) => !prev);
  }

  showMore() {
    this.isExpanded.set(true);
    if (this.search$.value) {
      const filteredItems = this.items().filter((item) =>
        item[this.valueKey()]
          .toLowerCase()
          .includes(this.search$.value!.toLowerCase())
      );
      this.itemList.set(filteredItems);
    } else {
      this.itemList.set(this.items());
    }
    this.isSelectOpened.set(true);
  }

  showLess() {
    this.isExpanded.set(false);
    if (this.search$.value) {
      const filteredItems = this.items().filter((item) =>
        item[this.valueKey()]
          .toLowerCase()
          .includes(this.search$.value!.toLowerCase())
      );
      this.itemList.set(filteredItems.slice(0, 5));
    } else {
      this.itemList.set(this.items().slice(0, 5));
    }
    this.isSelectOpened.set(true);
  }

  hasMoreItems(): boolean {
    if (this.isExpanded()) return false;
    if (this.search$.value) {
      return (
        this.items().filter((c: any) =>
          c[this.valueKey()]
            .toLowerCase()
            .includes(this.search$.value!.toLowerCase())
        ).length > 5
      );
    }
    return this.items().length > 5;
  }

  getOptionLabel(item: any): string {
    if (!item) return '';
    if (this.valueKey()) {
      // Support nested property (e.g., 'county.name')
      return (
        this.valueKey()
          .split('.')
          .reduce((obj, key) => obj?.[key], item) ?? ''
      );
    }
    return typeof item === 'string' ? item : '';
  }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    if (this.multiple()) {
      this.selectedItems.set(value || []);
    } else {
      this.selectedItems.set(value ? [value] : []);
    }
  }
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
