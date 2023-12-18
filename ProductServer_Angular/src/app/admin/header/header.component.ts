import { Component } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[]
})
export class HeaderComponent {
  username:string = "";

  constructor(private userService:UserService){
    this.username = <string> this.userService.getName();
  }
}
