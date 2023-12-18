import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Deliveryformat } from 'src/app/format/deliveryformat';

@Component({
  selector: 'app-editproductdelivery',
  templateUrl: './editproductdelivery.component.html',
  styleUrls: ['./editproductdelivery.component.css']
})
export class EditproductdeliveryComponent {

  delivery:Deliveryformat = {
    'pincode':0,
    'days':0
  };

  constructor(public modal: NgbActiveModal){

  }
}
