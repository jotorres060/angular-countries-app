import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {

  public countries: Country[] = [];
  public error: boolean = false;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  public search(capital: string): void {
    this.error = false;
    this.countryService.searchByCapital(capital)
      .subscribe(countries => {
        this.countries = countries;
      }, (err) => {
        this.error = true;
        this.countries = [];
      });
  }

}
