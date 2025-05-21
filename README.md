# Custom Dropdown & Selector Components

This library provides customizable Angular dropdown and selector components. Easily add single or multi-select dropdowns to your forms with a range of configuration options.

## Components

### <app-select>

A versatile dropdown (single or multiple select) for use in Angular reactive forms.

#### Features

• Single or Multi-Select: Toggle with the [multiple] input.  
• Reactive Forms Compatible: Bind directly with formControlName.  
• Custom Data Source: Pass any array of items.  
• Configurable Labels and Values: Use optionLabel and valueKey for display and data.  
• Placeholder Support: Set your own placeholder text.  
• Change Event: Listen for selection changes via (selectionChange).

#### Usage Example

<form [formGroup]="form">
  <app-select
    [items]="countriesList()"
    [placeholder]="'Select a country'"
    valueKey="code"
    optionLabel="name"
    [multiple]="true"
    (selectionChange)="onSelectionChange($event)"
    formControlName="selectedCountries"
  ></app-select>
</form>

#### Inputs

| Name        | Type    | Description                                          |
| ----------- | ------- | ---------------------------------------------------- |
| items       | array   | List of options to show in the dropdown              |
| placeholder | string  | Placeholder text to display when nothing is selected |
| valueKey    | string  | Property name to use as the value of each option     |
| optionLabel | string  | Property name to display for each option             |
| multiple    | boolean | Enable multi-select if true                          |

#### Outputs

| Name            | Type  | Description                      |
| --------------- | ----- | -------------------------------- |
| selectionChange | event | Emits when the selection changes |

⸻

## Quick Start

1. Install dependencies  
   Make sure you have Angular and any dependencies installed.

2. Import in Module

```typescript
import { ReactiveFormsModule } from '@angular/forms';
// ...other imports

@NgModule({
  declarations: [
    AppSelectComponent, // or your custom selector components
    // ...
  ],
  imports: [
    ReactiveFormsModule,
    // ...
  ],
})
```

3. Use in Template

See the usage example above.

4. Provide Data  
   In your component class:

```typescript
countriesList() {
  return [
    { name: 'Finland', code: 'FI' },
    { name: 'Sweden', code: 'SE' },
    // ...
  ];
}
```

And create a form group:

```typescript
form = this.fb.group({
  selectedCountries: [[]],
});
```

⸻

## Customization

You can extend the components to fit your project’s needs, including custom styles, additional events, or other input types.

⸻

## License

MIT
