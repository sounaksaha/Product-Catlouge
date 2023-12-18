import { Component } from '@angular/core';
import { NgbActiveModal, NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/productservice/product.service';
import { DeleteproductComponent } from '../deleteproduct/deleteproduct.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig],
  
})
export class HomeComponent {
	showNavigationArrows = false;
	showNavigationIndicators = false;
	images = [8].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
}
