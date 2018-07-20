import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendertableComponent } from './calendertable.component';

describe('CalendertableComponent', () => {
  let component: CalendertableComponent;
  let fixture: ComponentFixture<CalendertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
