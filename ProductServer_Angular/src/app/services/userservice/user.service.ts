import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { UserFormat } from 'src/app/format/userformat';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_NAME = 'authenticatedUserFirstName'
  USER_ROLE = 'authorizedRole';
  USER_LNAME = 'authenticatedUserLastName';
  USER_EMAIL = 'authenticatedUserEmail';

  email: string = '';
  password: string = '';

  constructor(public http: HttpClient,private route:Router) { }

  authenticationService(user:UserFormat) {
    return this.http.post(`http://localhost:8083/login`,user,
      { headers: { authorization: this.createBasicAuthToken(user.email, user.password) } }).pipe(map((res) => {
        user = <UserFormat> res;
        this.email = user.email;
        this.password = user.password;
        this.registerSuccessfulLogin(user);
      }));
  }

  addUser(data:any)
  {
    return this.http.post('http://localhost:8083/register',data);
  }

  getAllUser(){
    return this.http.get('http://localhost:8083/user');
  }

  createBasicAuthToken(email: string, password: string) {
    let auth = 'Basic ' + window.btoa(email + ":" + password);
    sessionStorage.setItem("basicauth",auth);
    return auth;
  }

  registerSuccessfulLogin(user:UserFormat) {
    sessionStorage.setItem(this.USER_NAME,<string>user.firstname);
    sessionStorage.setItem(this.USER_LNAME,<string>user.lastname);
    sessionStorage.setItem(this.USER_ROLE,user.role);
    sessionStorage.setItem(this.USER_EMAIL,<string>user.email);
  }

  logout() {
    sessionStorage.clear();
    this.email = '';
    this.password = '';
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInEmail() {
    let user = sessionStorage.getItem(this.USER_NAME)
    if (user === null) return ''
    return user
  }

  getName(){
    return sessionStorage.getItem(this.USER_NAME);
  }

  getLName(){
    return sessionStorage.getItem(this.USER_LNAME);
  }

  getEmail(){
    return sessionStorage.getItem(this.USER_EMAIL);
  }
  getRole(){
    return sessionStorage.getItem(this.USER_ROLE);
  }
}
