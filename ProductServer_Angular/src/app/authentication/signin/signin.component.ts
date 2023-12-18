import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserFormat } from 'src/app/format/userformat';
import { MessageComponent } from 'src/app/message/message.component';
import { ROLE } from 'src/app/role';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  
  pattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  constructor(private userService:UserService,private modalService: NgbModal,private route:Router){}

  login(user:UserFormat){
    this.userService.authenticationService(user).subscribe((response)=>{
      if(this.userService.getRole() == ROLE.ADMIN)
      {
        this.route.navigateByUrl("/admin/home");
      }
      else
      {
        this.route.navigateByUrl("user/home");
      }
    },()=>{
      const message = this.modalService.open(MessageComponent);
      message.componentInstance.title = "Message";
      message.componentInstance.message = "User Not Found";
    })
  }
}
