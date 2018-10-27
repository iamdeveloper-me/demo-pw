import { TestBed, inject } from '@angular/core/testing';

import { BusinessinformationService } from './businessinformation.service';

describe('BusinessinformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessinformationService]
    });
  });

  it('should be created', inject([BusinessinformationService], (service: BusinessinformationService) => {
    expect(service).toBeTruthy();
  }));
});
