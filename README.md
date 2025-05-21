# Custom Dropdown & Selector Components for Angular

A set of modern, customizable dropdown and multi-select components for Angular applications. Seamlessly integrate with Angular Reactive Forms to create flexible filter panels and user-friendly forms.

[Live Demo](https://custom-selector-two.vercel.app/)

---

## Features

- **Single and Multi-Select Support:** Switch between single or multiple selection with a simple property.
- **Custom Data Source:** Easily bind arrays of objects—works with any data.
- **Customizable Labels and Values:** Choose which property to display and which to use as the value.
- **Form Integration:** Designed for use with Angular Reactive Forms.
- **Placeholder & Label Support:** Improve form clarity and UX.
- **Disabled State:** Effortlessly disable the component as needed.
- **Change Events:** Listen to selection changes for real-time feedback.
- **Flexible Styling:** Ready to style with Tailwind or your custom CSS.

---

## Live Example

```html
<div class="p-5">
  <form [formGroup]="form" class="flex justify-center gap-5">
    <!-- Multi-select component -->
    <app-select [items]="countriesList()" [placeholder]="'Select a item'" valueKey="name" optionLabel="name" [multiple]="true" (selectionChange)="onSelectionChange($event)" formControlName="selectedItem" label="Filter by countries" />
    <!-- Dropdown (single select, disabled) -->
    <app-dropdown [dropdownOptions]="countriesList()" [optionLabel]="'name'" [value]="'code'" placeholder="All Countries" label="Filter by countries" value="value" [disable]="true" />
  </form>
</div>
```

---

## Usage

### 1. Install and Import

Make sure your Angular project has `ReactiveFormsModule` imported:

```typescript
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [ReactiveFormsModule /* ... */],
})
export class AppModule {}
```

### 2. Define Your Data

```typescript
countriesList() {
  return [
    { name: 'Finland', code: 'FI' },
    { name: 'Sweden', code: 'SE' },
    // more countries...
  ];
}
```

### 3. Create a Form

```typescript
form = this.fb.group({
  selectedItem: [[]], // for multi-select
  // or use '' for single select
});
```

### 4. Listen for Changes

```typescript
onSelectionChange(event: any) {
  console.log('Selection changed:', event);
}
```

---

## Component API

### `<app-select>`

| Input             | Type    | Description                             |
| ----------------- | ------- | --------------------------------------- |
| `items`           | array   | List of items to select from            |
| `placeholder`     | string  | Placeholder when nothing is selected    |
| `valueKey`        | string  | Property to use as the value            |
| `optionLabel`     | string  | Property to display as the option label |
| `multiple`        | boolean | Enables multiple selection              |
| `formControlName` | string  | Binds to Angular form control           |
| `label`           | string  | Field label                             |

| Output            | Description                      |
| ----------------- | -------------------------------- |
| `selectionChange` | Emits when the selection changes |

---

### `<app-dropdown>`

| Input             | Type    | Description                      |
| ----------------- | ------- | -------------------------------- |
| `dropdownOptions` | array   | List of options for the dropdown |
| `optionLabel`     | string  | Property to show as label        |
| `value`           | string  | Property to use as value         |
| `placeholder`     | string  | Placeholder text                 |
| `label`           | string  | Field label                      |
| `disable`         | boolean | Disable the dropdown             |

---

## Customization

- **Styling:** Components are compatible with Tailwind CSS but can be styled to match your app.
- **Extend Functionality:** Add your own features, validation, or data sources.

---

## License

MIT

---

**Ready to use, extend, and impress!**
