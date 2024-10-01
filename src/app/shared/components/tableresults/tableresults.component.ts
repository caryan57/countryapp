import { Component, Input } from '@angular/core';
import { Country } from '../../../countries/interfaces/country';

@Component({
  selector: 'app-tableresults',
  templateUrl: './tableresults.component.html',
  styleUrl: './tableresults.component.css'
})
export class TableResultsComponent {

  @Input()
  public countries: Country[] = [];
}
