import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent {

  constructor(private route:Router,private userService:UserService){
    this.userService.logout();
    this.route.navigateByUrl("");
  }
}
