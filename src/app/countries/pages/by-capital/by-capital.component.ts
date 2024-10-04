import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-countries-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.css'
})

export class ByCapitalComponent implements OnInit {
  constructor(
    private countriesService: CountriesService
  ){}

  private _countries: Country[] = [];

  public isLoading: boolean = false;

  public initValue: string = '';

  get countries(): Country[] {
    return [...this._countries];
  }

  ngOnInit(): void {
    this._countries = this.countriesService.cacheStore.byCapital.countries;
    this.initValue = this.countriesService.cacheStore.byCapital.query;
  }

  searchByCapital(query: string): void {
    this.isLoading = true;
    const request = this.countriesService.searchByCapital(query);

    request.subscribe((countries: Country[]) => {
      this._countries = countries;

      this.isLoading = false;
    })    
  }
}
