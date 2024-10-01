import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) { }

  private API_URL: string = 'https://restcountries.com/v3.1';

  private handleError(error: Error) {
    //  A fin de devolver un Observable[], usamos un metodo que lo hace por nosotros llamado of()
    console.log(error);
    return of([]);
  }

  private handleRequest(url: string) {
    /**
     * Los pipes transforman la data o informacion que obtenemos de las peticiones.
     * Hay varios tipos de pipes que Angular tiene para mapear, manejar errores etc...
     * Usamos el pipe catchError().
     * 
    */
    return this.http.get<Country[]>(url)
    .pipe(
      catchError((error: Error) => {
        return this.handleError(error);
      })
    );
  }

  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.API_URL}/capital/${query}`;
    return this.handleRequest(url);
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${this.API_URL}/name/${query}`;
    return this.handleRequest(url);
  }

  searchByRegion(query: string): Observable<Country[]> {
    const url = `${this.API_URL}/region/${query}`;
    return this.handleRequest(url);
  }
}
