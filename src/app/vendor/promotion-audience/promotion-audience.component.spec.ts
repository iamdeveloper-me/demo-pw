import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionAudienceComponent } from './promotion-audience.component';

describe('PromotionAudienceComponent', () => {
  let component: PromotionAudienceComponent;
  let fixture: ComponentFixture<PromotionAudienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionAudienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
