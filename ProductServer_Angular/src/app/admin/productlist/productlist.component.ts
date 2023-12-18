import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Productformat } from 'src/app/format/productformat';
import { ProductService } from 'src/app/services/productservice/product.service';
import { DeleteproductComponent } from '../deleteproduct/deleteproduct.component';
import { EditproductComponent } from '../editproduct/editproduct.component';

@Component({
	selector: 'app-productlist',
	templateUrl: './productlist.component.html',
	styleUrls: ['./productlist.component.css'],
	providers: [NgbActiveModal]
})
export class ProductlistComponent {

	page = 1;
	pageSize = 5;
	totalProducts = 0;
	products: Productformat[] = [{
		productCode: 0, productName: '', productBrand: '', productDescription: '', productPrice: 0,
		productImage: ''
	  }];

	allProducts: Productformat[] = [{
		productCode: 0, productName: '', productBrand: '', productDescription: '', productPrice: 0,
		productImage: ''
	  }];

	constructor(private productService: ProductService, private _modalService: NgbModal,private route:Router) {
		this.updateProducts();
	}

	deleteByID(button: any) {
		this._modalService.open(DeleteproductComponent).result.then(
			(result) => {
				if (result == 1) {
					this.productService.deleteProduct(button.id).subscribe((_response) => {
						this.updateProducts();
					});
				}
			},
		);
	}

	editById(button: any) {
		this.route.navigateByUrl("/admin/editproduct/"+button.id);
	}

	updateProducts() {
		this.productService.getProduct().subscribe((response) => {
			this.allProducts = <Productformat[]>response;
			this.allProducts.sort((_a: Productformat, _b: Productformat)=>{
				return _a.productCode-_b.productCode;
			});
			this.totalProducts = this.allProducts.length;
			this.refreshProducts();
		})
	}

	refreshProducts() {
		this.products = this.allProducts.map((data: any, i: number) => ({ id: i + 1, ...data })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
