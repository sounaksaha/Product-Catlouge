import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproductdeliveryComponent } from './editproductdelivery.component';

describe('EditproductdeliveryComponent', () => {
  let component: EditproductdeliveryComponent;
  let fixture: ComponentFixture<EditproductdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproductdeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditproductdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
