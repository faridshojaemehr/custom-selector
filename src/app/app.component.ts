import {
  Component,
  OnInit,
  input,
  model,
  signal,
  Input,
  computed,
} from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { countriesList } from './app.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  multi = input<boolean>(false);
  search = model<string | null>(null);
  label = input<string | null>(null);
  search$ = new BehaviorSubject<any>(null);
  isSelectOpened = signal<boolean>(false);
  selectedItem = signal<any[] | null>([]);
  itemsList = signal<any[]>(countriesList);
  isExpanded = signal<boolean>(false);
  private _itemList = computed(() => this.itemsList());

  ngOnInit(): void {
    this.search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((val) => {
          if (val) {
            const filteredCountries = this.itemsList().filter((country) =>
              country.toLowerCase().includes(val.toLowerCase())
            );
            return this.itemsList.set(filteredCountries.slice(0, 5));
          } else {
            return this.itemsList.set(this._itemList().slice(0, 5));
          }
        })
      )
      .subscribe();
    // Set selectedCountry initial value based on multi
    if (this.multi()) {
      this.selectedItem.set([]);
    } else {
      this.selectedItem.set(null);
    }
  }

  toggle() {
    this.isSelectOpened.update((prev) => !prev);
  }

  onSelectItem(item: any) {
    const selectedItem = this.selectedItem();
    if (selectedItem?.includes(item)) {
      this.selectedItem.set(selectedItem.filter((c) => c !== item));
    } else {
      this.selectedItem.set([...(selectedItem || []), item]);
    }
    // } else {
    //   if (this.selectedCountry() === item) {
    //     this.selectedCountry.set(null);
    //   } else {
    //     this.selectedCountry.set(item);
    //   }
    // }
    // this.isSelectOpened.set(false);
  }
  clear(item: any) {
    this.search.set(null);
    this.itemsList.set(this._itemList());
    this.isSelectOpened.set(false);
    if (this.multi()) {
      const selectedItem = this.selectedItem();
      this.selectedItem.set(selectedItem?.filter((c) => c !== item) || []);
    } else {
      this.selectedItem.set(null);
    }
  }

  onToggleCountry() {
    this.isSelectOpened.update((prev) => !prev);
  }

  showMore() {
    if (this.search()) {
      const filteredCountries = this.itemsList().filter((country) =>
        country.toLowerCase().includes(this.search()!.toLowerCase())
      );
      this.itemsList.set(filteredCountries);
    } else {
      this.itemsList.set(this.itemsList());
    }
    this.isSelectOpened.set(true);
    this.isExpanded.set(true);
  }

  showLess() {
    if (this.search()) {
      const filteredCountries = this.itemsList().filter((country) =>
        country.toLowerCase().includes(this.search()!.toLowerCase())
      );
      this.itemsList.set(filteredCountries.slice(0, 5));
    } else {
      this.itemsList.set(this.itemsList().slice(0, 5));
    }
    this.isSelectOpened.set(true);
    this.isExpanded.set(false);
  }

  hasMoreItems(): boolean {
    if (this.search()) {
      return (
        this.itemsList().filter((c) =>
          c.toLowerCase().includes(this.search()!.toLowerCase())
        ).length > 5
      );
    }
    return this.itemsList().length > 5;
  }
}
