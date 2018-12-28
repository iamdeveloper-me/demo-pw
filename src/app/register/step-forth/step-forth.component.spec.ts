import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepForthComponent } from './step-forth.component';

describe('StepForthComponent', () => {
  let component: StepForthComponent;
  let fixture: ComponentFixture<StepForthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepForthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepForthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
