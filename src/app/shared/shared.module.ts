import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { TableResultsComponent } from './components/tableresults/tableresults.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SidebarComponent,
    ContactComponent,
    SearchboxComponent,
    TableResultsComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
    SearchboxComponent,
    TableResultsComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
