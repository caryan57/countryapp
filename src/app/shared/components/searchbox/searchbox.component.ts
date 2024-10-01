import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent {
  @Input()
  public customPlaceholder: string = 'Buscar...';

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  // @ViewChild('searchBox')
  // public searchBox!: ElementRef<HTMLInputElement>;

  emitSearch(query: string): void {
    // const query = this.searchBox.nativeElement.value;
    if(query.length === 0) return;
    this.onSearch.emit(query);

    // this.searchBox.nativeElement.value = '';
  }
}
