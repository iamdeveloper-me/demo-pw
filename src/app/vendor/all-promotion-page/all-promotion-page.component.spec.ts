import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPromotionPageComponent } from './all-promotion-page.component';

describe('AllPromotionPageComponent', () => {
  let component: AllPromotionPageComponent;
  let fixture: ComponentFixture<AllPromotionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPromotionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPromotionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
