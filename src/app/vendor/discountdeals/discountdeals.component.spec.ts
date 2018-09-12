import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountdealsComponent } from './discountdeals.component';

describe('DiscountdealsComponent', () => {
  let component: DiscountdealsComponent;
  let fixture: ComponentFixture<DiscountdealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountdealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
