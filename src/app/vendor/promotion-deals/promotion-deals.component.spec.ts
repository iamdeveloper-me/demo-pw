import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionDealsComponent } from './promotion-deals.component';

describe('PromotionDealsComponent', () => {
  let component: PromotionDealsComponent;
  let fixture: ComponentFixture<PromotionDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
