import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-countries-by-country',
  templateUrl: './by-country.component.html',
  styleUrl: './by-country.component.css'
})
export class ByCountryComponent implements OnInit {
  constructor(
    private countriesService: CountriesService
  ){}
  
  private _countries: Country[] = [];

  public initValue: string = '';

  get countries(): Country[] {
    return [...this._countries];
  }

  ngOnInit(): void {
    this._countries = this.countriesService.cacheStore.byCountry.countries;
    this.initValue = this.countriesService.cacheStore.byCountry.query;
  }

  searchByCountry(query: string): void {
    const request = this.countriesService.searchByCountry(query);

    request.subscribe((countries: Country[]) => {
      this._countries = countries;
    })    
  }
}
