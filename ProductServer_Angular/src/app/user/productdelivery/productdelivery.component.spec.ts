import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdeliveryComponent } from './productdelivery.component';

describe('ProductdeliveryComponent', () => {
  let component: ProductdeliveryComponent;
  let fixture: ComponentFixture<ProductdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
