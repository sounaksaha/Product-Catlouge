import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgbCarouselModule, NgbCollapseModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdeliveryComponent } from './productdelivery/productdelivery.component';
import { AddproductdeliveryComponent } from './addproductdelivery/addproductdelivery.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { EditproductdeliveryComponent } from './editproductdelivery/editproductdelivery.component';
import { CustomersComponent } from './customers/customers.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    AddproductComponent,
    DeleteproductComponent,
    ProductlistComponent,
    ProductdeliveryComponent,
    AddproductdeliveryComponent,
    EditproductComponent,
    EditproductdeliveryComponent,
    CustomersComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbDropdownModule,
    NgbCarouselModule,
    NgbModule,
    FormsModule
  ]
})
export class AdminModule { }
