import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productformat } from 'src/app/format/productformat';
import { ProductService } from 'src/app/services/productservice/product.service';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent {
  products: Productformat[] = [{
    productCode: 0, productName: '', productBrand: '', productDescription: '', productPrice: 0,
    productImage: ''
  }];

  sony: boolean = false;
  samsung: boolean = false;
  boat: boolean = false;
  puma: boolean = false;
  nike: boolean = false;
 adidas:boolean= false;
  pricecondition: string = '0';

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.productService.findProduct(this.route.snapshot.paramMap.get('param')).subscribe((response) => {
      console.log(response);
      this.products = <Productformat[]>response;
    });
  }

  update() {
    this.productService.findProduct(this.route.snapshot.paramMap.get('param')).subscribe((response) => {
      this.products = <Productformat[]>response;

      this.updateByBrand();
      this.updateByPrice();
    });
  }

  updateByBrand() {

    if (this.sony || this.boat || this.nike || this.puma || this.samsung || this.adidas)  {
      this.products = this.products.filter((product: any) => {
        return (product.productBrand.toLowerCase() == "sony" && this.sony) ||
          (product.productBrand.toLowerCase() == "samsung" && this.samsung) ||
          (product.productBrand.toLowerCase() == "boat" && this.boat) ||
          (product.productBrand.toLowerCase() == "puma" && this.puma) ||
          (product.productBrand.toLowerCase() == "nike" && this.nike) ||
          (product.productBrand.toLowerCase() == "adidas" && this.adidas)
      });
    }
  }

  updateByPrice() {

    switch (this.pricecondition) {
      case '1': {
        this.products = this.products.filter((product: any) => {
          return product.productPrice <= 1000;
        })
        break;
      }
      case '2': {
        this.products = this.products.filter((product: any) => {
          return (product.productPrice >= 1001 && product.productPrice <= 2000);
        })
        break;
      }
      case '3': {
        this.products = this.products.filter((product: any) => {
          return (product.productPrice >= 2001 && product.productPrice <= 3000);
        })
        break;
      }
      case '4': {
        this.products = this.products.filter((product: any) => {
          return (product.productPrice >= 3001 && product.productPrice <= 4000);
        })
        break;
      }
      case '5': {
        this.products = this.products.filter((product: any) => {
          return (product.productPrice >= 4001 && product.productPrice <= 5000);
        })
        break;
      }
      case '6': {
        this.products = this.products.filter((product: any) => {
          return product.productPrice >= 5001;
        })
        break;
      }
      default:
        break;
    }
  }

  priceupdate(event: any) {
    this.pricecondition = event.target.value;
    this.update();
  }

}
