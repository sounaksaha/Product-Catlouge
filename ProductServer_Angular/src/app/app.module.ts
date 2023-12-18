import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TokenInterceptor } from './intercetors/token.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {  
      provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
