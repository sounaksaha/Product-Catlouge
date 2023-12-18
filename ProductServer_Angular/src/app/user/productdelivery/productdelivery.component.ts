import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productdelivery',
  templateUrl: './productdelivery.component.html',
  styleUrls: ['./productdelivery.component.css']
})
export class ProductdeliveryComponent {
  
  message:string = "";
  constructor(public activeModal:NgbActiveModal){}
}
