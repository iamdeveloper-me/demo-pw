import { TestBed, inject } from '@angular/core/testing';

import { GuestserviceService } from '../app/userpannel/userboard/guest/guestservice.service'

describe('GuestserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestserviceService]
    });
  });

  it('should be created', inject([GuestserviceService], (service: GuestserviceService) => {
    expect(service).toBeTruthy();
  }));
});
