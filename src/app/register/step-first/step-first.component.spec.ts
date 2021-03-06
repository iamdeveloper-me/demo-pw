import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { StepFirstComponent } from './step1.component';
import {StepFirstComponent} from '../step-first/step-first.component';

describe('StepFirstComponent', () => {
  let component: StepFirstComponent;
  let fixture: ComponentFixture<StepFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
