import { TestBed, inject } from '@angular/core/testing';

import { SignupVendorService } from './signup-vendor.service';

describe('SignupVendorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignupVendorService]
    });
  });

  it('should be created', inject([SignupVendorService], (service: SignupVendorService) => {
    expect(service).toBeTruthy();
  }));
});
