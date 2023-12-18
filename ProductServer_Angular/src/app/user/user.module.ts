import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbCarouselModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ResultpageComponent } from './resultpage/resultpage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductdeliveryComponent } from './productdelivery/productdelivery.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ResultpageComponent,
    ProductdetailsComponent,
    ProductdeliveryComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbDropdownModule,
    NgbCarouselModule,
    FormsModule
  ]
})
export class UserModule { }
