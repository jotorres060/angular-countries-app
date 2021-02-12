import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  public regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public activeRegion: string = '';
  public countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  public activateRegion(region: string): void {
    if (region === this.activeRegion) {
      return;
    }

    this.activeRegion = region;
    this.countries = [];
    this.countryService.searchByRegion(region)
      .subscribe((countries) => {
        this.countries = countries;
      });
  }

  public getActiveRegionCssClasses(region: string): string {
    return (region === this.activeRegion)
            ? 'btn btn-primary btn-sm ms-1'
            : 'btn btn-outline-primary btn-sm ms-1';
  }

}
