import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/productservice/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route: Router,private productService: ProductService) {
  }

  search(data: any) {
    this.productService.findProduct(data.searchParameter).subscribe((response) => {
      const product = <[]>response;
      if (product.length == 0) {
        alert("No Product Found..!!!");
      }
      else {
        this.route.navigateByUrl("user/result/" + data.searchParameter);
      }
    });
  }
}

