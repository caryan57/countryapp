import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Country, CacheStore, Region } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) {
    this.loadLocalStore();
  }

  private API_URL: string = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    byCapital: { query: '', countries: [] },
    byCountry: { query: '', countries: [] },
    byRegion: { query: undefined, countries: [] },
  };

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

  private saveLocalStore() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadLocalStore() {
    if(!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.API_URL}/capital/${query}`;
    return this.handleRequest(url)
    .pipe(
      tap((countries: Country[]) => this.cacheStore.byCapital = { query, countries }),
      tap(() => this.saveLocalStore())
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${this.API_URL}/translation/${query}`;
    return this.handleRequest(url)
    .pipe(
      tap((countries: Country[]) => this.cacheStore.byCountry = { query, countries }),
      tap(() => this.saveLocalStore())
    );
  }

  searchByRegion(query: Region): Observable<Country[]> {
    const url = `${this.API_URL}/region/${query}`;
    return this.handleRequest(url)
    .pipe(
      tap((countries: Country[]) => this.cacheStore.byRegion = { query, countries }),
      tap(() => this.saveLocalStore())
    );
  }

  searchByCountryCode(code:string): Observable<Country[]> {
    const url = `${this.API_URL}/alpha/${code}`;
    return this.handleRequest(url);
  }
}
