import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent implements OnInit, OnDestroy {
  /**
   * En este componente se implementa un debouncer que nos permite hacer una busqueda despues de cierto tiempo
   * que el usuario deja de escribir. En el ciclo de vida del debouncer creamos una propieda llamada debouncer que
   * es de tipo Subject (los Subject pertenecen a rxjs y crean Observers manuales) y creamos una variable currentDebouncer
   * que guarda en memoria el debouncer actual para despues limpiar el suscriber en un on Destroy
   * 
   * 
   * Usamos un EventEmitter para emitir un evento que el componente padre va a recibir y entonces hacer la busqueda.
   */
  @Input()
  public customPlaceholder: string = 'Buscar...';

  @Input()
  public initalValue: string = '';

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  private currentDebouncer?: Subscription;

  // Subject pertenece a rxjs y es un tipo de Observable
  private debouncer: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    // Definimos lo que hara el debouncer. 
    // Por ejemplo, con debounceTime definimos que espere cierto tiempo antes de continuar su ejecucion
    this.currentDebouncer = this.debouncer
    .pipe(
      debounceTime(400)
    )
    .subscribe(value => {
      // Emitimos el evento para realizar la busqueda
      this.onSearch.emit(value);
    })
  }

  ngOnDestroy(): void {
    // Limpiar debouncer
    this.currentDebouncer?.unsubscribe;
  }

  emitSearch(query: string): void {
    // Ejecutamos el debouncer
    this.debouncer.next(query);
  }
}
