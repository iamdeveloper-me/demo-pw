import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionPriorityComponent } from './promotion-priority.component';

describe('PromotionPriorityComponent', () => {
  let component: PromotionPriorityComponent;
  let fixture: ComponentFixture<PromotionPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
