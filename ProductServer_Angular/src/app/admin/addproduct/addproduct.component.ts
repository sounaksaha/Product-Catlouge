import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Productformat } from 'src/app/format/productformat';
import { MessageComponent } from 'src/app/message/message.component';
import { ProductService } from 'src/app/services/productservice/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  constructor(private productService: ProductService, private modalService: NgbModal, private route: Router) { }
  base64textString: any;

  addProduct(data: Productformat) {
    data.productImage = this.base64textString;
    this.productService.addProduct(data).subscribe((response) => {
      if (response) {
        const modalRef = this.modalService.open(MessageComponent);
        modalRef.componentInstance.message = 'Product Added Successfully';
        modalRef.componentInstance.title = 'Message';
        modalRef.result.then((response) => {
          this.route.navigateByUrl("/admin/products");
        })
      } else {
        const modalRef = this.modalService.open(MessageComponent);
        modalRef.componentInstance.message = 'ProductCode Already Exists';
        modalRef.componentInstance.title = 'Message';
      }

    }, () => {
      const modalRef = this.modalService.open(MessageComponent);
      modalRef.componentInstance.message = 'Product Cannot Added';
      modalRef.componentInstance.title = 'Message';
    });
  }

  onFileUpload(event: any) {
    const [file] = event.target.files;
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.base64textString = e.target.result.split('base64,')[1];
    };
    reader.readAsDataURL(file);
  }

  handleFileSelect(files: any) {
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }
}
