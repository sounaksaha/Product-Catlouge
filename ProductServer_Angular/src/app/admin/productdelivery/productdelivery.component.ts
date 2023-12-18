import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Deliveryformat } from 'src/app/format/deliveryformat';
import { ProductdeliveryService } from 'src/app/services/productdelivery/productdelivery.service';
import { DeleteproductComponent } from '../deleteproduct/deleteproduct.component';
import { EditproductdeliveryComponent } from '../editproductdelivery/editproductdelivery.component';

@Component({
  selector: 'app-productdelivery',
  templateUrl: './productdelivery.component.html',
  styleUrls: ['./productdelivery.component.css'],
  providers:[NgbActiveModal]
})

export class ProductdeliveryComponent {
  	
	page = 1;
	pageSize = 5;
	totalDelivery = 0;
	productsdelivery: Deliveryformat[] = [
		{
			'pincode':0,
			'days':0
		}
	];
	allProductdelivery: Deliveryformat[] = [
		{
			'pincode':0,
			'days':0
		}
	];

	constructor(private productdeliveryService:ProductdeliveryService,private _modalService: NgbModal){
		this.updateProducts();
	}

	deleteByID(button:any){
		this._modalService.open(DeleteproductComponent).result.then(
			(result) => {
				if (result == 1) {
					this.productdeliveryService.deleteDelivery(button.id).subscribe((response) => {
						this.updateProducts();
					});
				}
			},
		);
	}

	editdelivery(button:any){
		const delivery = this._modalService.open(EditproductdeliveryComponent);
		this.productdeliveryService.getDeliveryByPincode(button.id).subscribe((response)=>{
			delivery.componentInstance.delivery = response;
		})
		delivery.result.then((response)=>{
			if(response==1){
				this.productdeliveryService.updateDelivery(delivery.componentInstance.delivery).subscribe((response)=>{
					this.updateProducts();
				})
			}
		})
	}

	updateProducts(){
		this.productdeliveryService.getDelivery().subscribe((response)=>{
			this.allProductdelivery = <Deliveryformat[]> response;
			this.allProductdelivery.sort(((a: Deliveryformat, b: Deliveryformat)=>{
				return a.pincode-b.pincode;
			}))
			this.totalDelivery = this.allProductdelivery.length;
			this.refreshProducts();
		})
	}

  	refreshProducts() {
		this.productsdelivery = this.allProductdelivery.map((data: any, i: number) => ({ id: i + 1, ...data })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
