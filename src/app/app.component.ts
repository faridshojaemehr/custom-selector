import { Component, OnInit, input, model, signal } from '@angular/core';
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
  search = model<string | null>(null);
  label = input<string | null>(null);
  search$ = new BehaviorSubject<any>(null);
  isSelectOpened = signal<boolean>(false);
  selectedCountry = signal<string | null>(null);
  countryList = signal<string[]>([]);

  ngOnInit(): void {
    this.search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((val) => {
          if (val) {
            const filteredCountries = countriesList.filter((country) =>
              country.toLowerCase().includes(val.toLowerCase())
            );
            return this.countryList.set(filteredCountries);
          } else {
            return this.countryList.set([]);
          }
        })
      )
      .subscribe();
  }

  toggle() {
    this.isSelectOpened.update((prev) => !prev);
  }

  onSelectContry(country: string) {
    this.selectedCountry.set(country);
    this.isSelectOpened.set(false);
  }
  clear() {
    this.search.set(null);
    this.countryList.set([]);
    this.isSelectOpened.set(false);
    this.selectedCountry.set(null);
  }

  onToggleCountry() {
    this.isSelectOpened.update((prev) => !prev);
  }
}
