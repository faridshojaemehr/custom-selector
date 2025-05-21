import { Component, Input, forwardRef, input, signal } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  imports: [FormsModule],
  templateUrl: './ac-dropdown.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AcDropdownComponent),
      multi: true,
    },
  ],
})
export class AcDropdownComponent implements ControlValueAccessor {
  size = input<string>('large');
  optionLabel = input.required<string>();
  defaultValue = input<string>('');
  value = input.required<string>();
  disable = input<boolean>(false);

  options = signal<any[]>([]);
  disabled = signal(false);
  setPlaceholder = signal<string>('Select an option');
  ariaLabel = signal('Dropdown selection');
  setLabel = signal<string | null>(null);
  private _selectedValue: string = '';

  get selectedValue(): string {
    return this._selectedValue;
  }

  set selectedValue(value: string) {
    if (value !== this._selectedValue) {
      this._selectedValue = value;
      this.onChange(value);
    }
  }

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input() set dropdownOptions(value: any[]) {
    this.options.set(value);
  }

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input() set label(value: string) {
    this.setLabel.set(value);
  }

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input() set placeholder(value: string) {
    this.setPlaceholder.set(value);
  }

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this._selectedValue = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onSelectionChange(value: string): void {
    this.selectedValue = value;
  }

  getNestedProperties(obj: any, template: string): string {
    return template.replace(/\b([a-zA-Z0-9_?.]+)\b/g, (match) => {
      const resolvedValue = this.getSingleNestedProperty(obj, match);
      return resolvedValue ?? '';
    });
  }

  getSingleNestedProperty(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }
}
