import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/userservice/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private userService:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.userService.isUserLoggedIn() && sessionStorage.getItem('basicauth')){
      request = request.clone({
        setHeaders: {
          authorization:<string>sessionStorage.getItem('basicauth')
        }
      }) 
    }
    return next.handle(request);
  }
}
