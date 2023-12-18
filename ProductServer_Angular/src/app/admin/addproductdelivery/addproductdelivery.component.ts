import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from 'src/app/message/message.component';
import { ProductdeliveryService } from 'src/app/services/productdelivery/productdelivery.service';

@Component({
  selector: 'app-addproductdelivery',
  templateUrl: './addproductdelivery.component.html',
  styleUrls: ['./addproductdelivery.component.css']
})

export class AddproductdeliveryComponent {
  constructor(private productDeliveryService: ProductdeliveryService,
    private modalService: NgbModal, private route: Router) { }

  addProductDelivery(data: any) {
    this.productDeliveryService.addDelivery(data).subscribe((response) => {
      if (response) {
        const modalRef = this.modalService.open(MessageComponent);
        modalRef.componentInstance.message = 'Record Added Successfully';
        modalRef.componentInstance.title = 'Message';
        modalRef.result.then((response) => {
          this.route.navigateByUrl("/admin/productdelivery");
        });
      } else {
        const modalRef = this.modalService.open(MessageComponent);
        modalRef.componentInstance.message = 'Pincode Already Exists';
        modalRef.componentInstance.title = 'Message';
      }

    }, () => {
      const modalRef = this.modalService.open(MessageComponent);
      modalRef.componentInstance.message = 'Record Cannot Added';
      modalRef.componentInstance.title = 'Message';
    });
  }
}