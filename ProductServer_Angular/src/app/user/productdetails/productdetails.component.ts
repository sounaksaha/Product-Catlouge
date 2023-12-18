import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Deliveryformat } from 'src/app/format/deliveryformat';
import { Productformat } from 'src/app/format/productformat';
import { ProductdeliveryService } from 'src/app/services/productdelivery/productdelivery.service';
import { ProductService } from 'src/app/services/productservice/product.service';
import { ProductdeliveryComponent } from '../productdelivery/productdelivery.component';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {

  product: Productformat = {
    productCode: 0, productName: '', productBrand: '', productDescription: '', productPrice: 0,
    productImage: ''
  };

  constructor(private productService: ProductService, private deliverySerivce: ProductdeliveryService, private route: ActivatedRoute, private modalService: NgbModal) {
    console.log(this.route.snapshot.paramMap.get('productcode'));
    this.productService.getProductById(this.route.snapshot.paramMap.get('productcode')).subscribe((response) => {
      this.product = <Productformat>response;
    });
  }

  checkdelivery(data: any) {
    this.deliverySerivce.getDeliveryByPincode(data.data).subscribe((response) => {
      if (response) {
        let value = <Deliveryformat>response;
        
        const date = new Date(new Date().toISOString());
        date.setDate(date.getDate() + value.days);

        const modalRef = this.modalService.open(ProductdeliveryComponent);
        modalRef.componentInstance.message = 'Expected Delivery:-'+ this.formatDate(date);
      }
      else
      {
        const modalRef = this.modalService.open(ProductdeliveryComponent);
        modalRef.componentInstance.message = "Product cannot deliver at this pincode..";
      }
    })
  }

  padTo2Digits(num:any) {
    return num.toString().padStart(2, '0');
  }

  formatDate(date:any) {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }
}
