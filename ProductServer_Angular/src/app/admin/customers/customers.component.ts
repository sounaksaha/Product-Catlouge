import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/userservice/user.service';
import { Customerformat } from '../../format/customerformat';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  	page = 1;
	pageSize = 5;
	totalCustomers = 0;
	customers:Customerformat[] = [{
		email:'',
		firstname:'',
		lastname:''
	}];

	allcustomer:Customerformat[] = [
		{
			email:'',
			firstname:'',
			lastname:''
		}
	];

	constructor(private userService:UserService, private _modalService: NgbModal) {
		this.updateCustomer();
	}

  updateCustomer() {
		this.userService.getAllUser().subscribe((response) => {
			this.allcustomer = <Customerformat[]> response;
	
			this.totalCustomers = this.allcustomer.length;
			this.refreshProducts();
		})
	}

	refreshProducts() {
		this.customers = this.allcustomer.map((data: any, i: number) => ({ id: i + 1, ...data })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
