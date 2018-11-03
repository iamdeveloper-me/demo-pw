import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewandfeedbackComponent } from './reviewandfeedback.component';

describe('ReviewandfeedbackComponent', () => {
  let component: ReviewandfeedbackComponent;
  let fixture: ComponentFixture<ReviewandfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewandfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewandfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
