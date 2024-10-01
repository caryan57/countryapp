import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ByCapitalComponent } from "./pages/by-capital/by-capital.component";
import { ByRegionComponent } from "./pages/by-region/by-region.component";
import { ByCountryComponent } from "./pages/by-country/by-country.component";
import { CountryComponent } from "./pages/country/country.component";

const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalComponent
  },
  {
    path: 'by-region',
    component: ByRegionComponent
  },
  {
    path: 'by-country',
    component: ByCountryComponent
  },
  {
    path: 'by/:countryId',
    component: CountryComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CountriesRoutingModule { }