import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-countries-by-region',
  templateUrl: './by-region.component.html',
  styleUrl: './by-region.component.css'
})
export class ByRegionComponent {
  constructor(
    private countriesService: CountriesService
  ){}

  private _countries: Country[] = [];

  get countries(): Country[] {
    return [...this._countries];
  }

  searchByRegion(query: string): void {
    const request = this.countriesService.searchByRegion(query);

    request.subscribe((countries: Country[]) => {
      this._countries = countries;
    })
  }
}
