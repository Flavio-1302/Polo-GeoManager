import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MapComponent } from './main/map/map.component';
import { PlanComponent } from './main/plan/plan.component';
import { SuggestComponent } from './main/suggest/suggest.component';

const routes: Routes = [
  {path: "", component:HomepageComponent},
  {path:"search", component:MapComponent},
  {path:"plan", component:PlanComponent},
  {path:"suggest", component:SuggestComponent},
  {path:"homepage", redirectTo:""}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
