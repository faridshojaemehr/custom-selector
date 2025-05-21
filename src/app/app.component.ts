import { Component, computed, model, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AcSelectComponent } from './ac-select/ac-select.component';
import { countriesList } from './app.service';
import { AcDropdownComponent } from './ac-dropdown/ac-dropdown.component';
@Component({
  selector: 'app-root',
  imports: [AcSelectComponent, ReactiveFormsModule, AcDropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  countriesList = computed(() => countriesList);
  form = new FormGroup({
    selectedItem: new FormControl(),
  });
  selectedItems = model<any[]>([]);
  onSelectionChange(event: any) {
    console.log('output function', event);
  }

  ngOnInit(): void {
    this.form.controls.selectedItem.valueChanges.subscribe((value) => {
      console.log('formControl', value);
    });
  }
}
