import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-countries-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.css'
})

export class ByCapitalComponent {
  constructor(
    private countriesService: CountriesService
  ){}

  private _countries: Country[] = [];

  get countries(): Country[] {
    return [...this._countries];
  }

  searchByCapital(query: string): void {
    const request = this.countriesService.searchByCapital(query);

    request.subscribe((countries: Country[]) => {
      this._countries = countries;
    })    
  }
}
