import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Productformat } from 'src/app/format/productformat';
import { MessageComponent } from 'src/app/message/message.component';
import { ProductService } from 'src/app/services/productservice/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css'],
  providers: [NgbActiveModal]
})

export class EditproductComponent {
  base64textString: any;
  product: Productformat = {
    productCode: 0, productName: '', productBrand: '', productDescription: '', productPrice: 0,
    productImage: ''
  };

  constructor(public modal: NgbActiveModal, private productService: ProductService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
    this.productService.getProductById(this.route.snapshot.paramMap.get('productcode')).subscribe((response) => {
      this.product = <Productformat>response;
      this.base64textString = this.product.productImage;
    })
  }

  editProduct(data: any) {
    this.product.productImage = this.base64textString;
    this.productService.updateProduct(this.product).subscribe((response) => {
      const modalRef = this.modalService.open(MessageComponent);
      modalRef.componentInstance.message = 'Product Updated Successfully';
      modalRef.componentInstance.title = 'Message';
      modalRef.result.then((response) => {
        this.router.navigateByUrl("/admin/products");
      })
    }, () => {
      const modalRef = this.modalService.open(MessageComponent);
      modalRef.componentInstance.message = 'Product Cannot Updated';
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
