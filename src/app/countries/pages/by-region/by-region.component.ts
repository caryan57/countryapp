import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country, Region } from '../../interfaces';

@Component({
  selector: 'app-countries-by-region',
  templateUrl: './by-region.component.html',
  styleUrl: './by-region.component.css'
})
export class ByRegionComponent implements OnInit {
  constructor(
    private countriesService: CountriesService
  ){}
  
  private _countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  get countries(): Country[] {
    return [...this._countries];
  }

  ngOnInit(): void {
    this._countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.query;
  }

  searchByRegion(query: Region): void {
    
    this.selectedRegion = query;
    const request = this.countriesService.searchByRegion(query);

    request.subscribe((countries: Country[]) => {
      this._countries = countries;
    })
  }
}
