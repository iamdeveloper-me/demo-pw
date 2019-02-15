import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDealDetailComponent } from './vendor-deal-detail.component';

describe('VendorDealDetailComponent', () => {
  let component: VendorDealDetailComponent;
  let fixture: ComponentFixture<VendorDealDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDealDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDealDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
