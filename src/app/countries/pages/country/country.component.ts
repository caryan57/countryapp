import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-countries-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})

export class CountryComponent implements OnInit {
  /**
   * Para usar el query param de la ruta, inyectamos el servicio de @angular/router ActivatedRoute.
   * Si queremos hacer una verificacion inicial al crear el componente implementamos OnInit de @angular/core
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ){}

  public countries: Country[] = [];

  ngOnInit(): void {
    /**
     * Accedemos al param requerido mediante activatedRoute -> params
     * Usamos un pipe y el metodo switchMap para obtener el parametro de la url, ejecutar un servicio
     * que solicita los datos y al final suscribir la respuesta para enviar la informacion. Todo esto se 
     * ejecuta al momento de cargar el componente porque esta dentro de un ngOnInit
    */
    this.activatedRoute.params
    .pipe(
      switchMap(({ countryId }) => this.countriesService.searchByCountryCode(countryId))
    )
    .subscribe((response) => {
      if(!response) return this.router.navigateByUrl('');
      return this.countries = response;
    });
  }
}
