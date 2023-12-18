import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultpageComponent } from './resultpage/resultpage.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path:"result/:param",
    component:ResultpageComponent
  },
  {
    path:"productdetail/:productcode",
    component:ProductdetailsComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
