import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionHomepageComponent } from './promotion-homepage.component';

describe('PromotionHomepageComponent', () => {
  let component: PromotionHomepageComponent;
  let fixture: ComponentFixture<PromotionHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
