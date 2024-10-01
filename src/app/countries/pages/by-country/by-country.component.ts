import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-countries-by-country',
  templateUrl: './by-country.component.html',
  styleUrl: './by-country.component.css'
})
export class ByCountryComponent {
  constructor(
    private countriesService: CountriesService
  ){}

  private _countries: Country[] = [];

  get countries(): Country[] {
    return [...this._countries];
  }

  searchByCountry(query: string): void {
    const request = this.countriesService.searchByCountry(query);

    request.subscribe((countries: Country[]) => {
      this._countries = countries;
    })    
  }
}
