import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/pages/home/home.component';
import { AboutComponent } from './shared/pages/about/about.component';
import { ContactComponent } from './shared/pages/contact/contact.component';

const routes: Routes = [
  // '' significa /
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent
  // },
  // Usamos loadChildren para cargar el modulo de rutas que creamos en la carpeta countries. Podemos usar directamente el modulo de routing o el modulo principal pero que importe el modulo de rutas
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(module => module.CountriesModule)
  },
  // ** significa que cualquier ruta que no se haya definido me redirecciona a otra que yo diga
  {
    path:'**',
    redirectTo: 'countries/by-capital'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
