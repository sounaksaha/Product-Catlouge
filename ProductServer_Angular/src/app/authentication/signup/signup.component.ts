import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from 'src/app/message/message.component';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  pattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  constructor(private userService: UserService, private modalService: NgbModal, private router:Router) { }


  register(data: any) {
    this.userService.addUser(data).subscribe((_response) => {
      if(_response)
      {
        const message = this.modalService.open(MessageComponent);
        message.componentInstance.title = "Message";
        message.componentInstance.message = "User Added Successfully";
        message.result.then((response)=>{
          this.router.navigateByUrl("/");
        }) 
      }
      else
      {
        const message = this.modalService.open(MessageComponent);
        message.componentInstance.title = "Message";
        message.componentInstance.message = "Email Already Exists";      
      }
    }, () => {
      const message = this.modalService.open(MessageComponent);
      message.componentInstance.title = "Message";
      message.componentInstance.message = "Cannot added the User";
    })
  };
}
