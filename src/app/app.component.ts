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
  selectedCountry = signal<string[] | null>([]);
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
            return this.countryList.set(filteredCountries.slice(0, 5));
          } else {
            return this.countryList.set(countriesList.slice(0, 5));
          }
        })
      )
      .subscribe();
  }

  toggle() {
    this.isSelectOpened.update((prev) => !prev);
  }

  onSelectContry(country: string) {
    const selectedCountry = this.selectedCountry() || [];
    if (selectedCountry.includes(country)) {
      this.selectedCountry.set(selectedCountry.filter((c) => c !== country));
    } else {
      this.selectedCountry.set([...selectedCountry, country]);
    }
    // this.isSelectOpened.set(false);
  }
  clear(country: string) {
    this.search.set(null);
    this.countryList.set([]);
    this.isSelectOpened.set(false);
    const selectedCountry = this.selectedCountry() || [];
    this.selectedCountry.set(selectedCountry.filter((c) => c !== country));
  }

  onToggleCountry() {
    this.isSelectOpened.update((prev) => !prev);
  }

  showMore() {
    if (this.search()) {
      const filteredCountries = countriesList.filter((country) =>
        country.toLowerCase().includes(this.search()!.toLowerCase())
      );
      this.countryList.set(filteredCountries);
    } else {
      this.countryList.set(countriesList);
    }
    this.isSelectOpened.set(true);
  }

  hasMoreItems(): boolean {
    if (this.search()) {
      return (
        countriesList.filter((c) =>
          c.toLowerCase().includes(this.search()!.toLowerCase())
        ).length > 5
      );
    }
    return countriesList.length > 5;
  }
}
