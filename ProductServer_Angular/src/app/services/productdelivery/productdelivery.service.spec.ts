import { TestBed } from '@angular/core/testing';

import { ProductdeliveryService } from './productdelivery.service';

describe('ProductdeliveryService', () => {
  let service: ProductdeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductdeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
