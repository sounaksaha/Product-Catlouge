import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductdeliveryComponent } from './addproductdelivery.component';

describe('AddproductdeliveryComponent', () => {
  let component: AddproductdeliveryComponent;
  let fixture: ComponentFixture<AddproductdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductdeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproductdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
