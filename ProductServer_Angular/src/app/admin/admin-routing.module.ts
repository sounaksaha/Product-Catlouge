import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddproductdeliveryComponent } from './addproductdelivery/addproductdelivery.component';
import { CustomersComponent } from './customers/customers.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { HomeComponent } from './home/home.component';
import { ProductdeliveryComponent } from './productdelivery/productdelivery.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path:"addproduct",
    component:AddproductComponent
  },
  {
    path:"products",
    component:ProductlistComponent
  },
  {
    path:"productdelivery",
    component:ProductdeliveryComponent
  },
  {
    path:"addproductdelivery",
    component:AddproductdeliveryComponent
  },
  {
    path:"editproduct/:productcode",
    component:EditproductComponent
  },
  {
    path:"customers",
    component:CustomersComponent
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
export class AdminRoutingModule { }
