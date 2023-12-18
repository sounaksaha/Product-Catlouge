import { Component } from '@angular/core';
import { Customerformat } from 'src/app/format/customerformat';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  record: Customerformat = {
    'firstname':'',
    'lastname':'',
    'email':''
  };

  constructor(private userService:UserService){
    this.record.firstname = <string> this.userService.getName();
    this.record.lastname = <string> this.userService.getLName();
    this.record.email = <string> this.userService.getEmail();
  }
}
