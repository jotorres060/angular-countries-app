import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent {

  public country: string = '';
  public countries: Country[] = [];
  public error: boolean = false;
  public suggestedCountries: Country[] = [];
  public showSuggestions: boolean = false;

  constructor(private countryService: CountryService) { }

  public search(country: string): void {
    this.error = false;
    this.country = country;
    this.showSuggestions = false;
    this.countryService.searchByCountry(country)
      .subscribe(countries => {
        this.countries = countries;
      }, (err) => {
        this.error = true;
        this.countries = [];
      });
  }

  public suggestions(country: string): void {
    this.country = country;
    this.showSuggestions = true;
    this.countryService.searchByCountry(country)
      .subscribe((countries) => {
        this.suggestedCountries = countries.splice(0,5);
      }, (err) => {
        this.suggestedCountries = [];
      });
  }

}
