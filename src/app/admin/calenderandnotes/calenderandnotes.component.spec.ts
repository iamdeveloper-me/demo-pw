import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderandnotesComponent } from './calenderandnotes.component';

describe('CalenderandnotesComponent', () => {
  let component: CalenderandnotesComponent;
  let fixture: ComponentFixture<CalenderandnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderandnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderandnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
