import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcelandarComponent } from './eventcelandar.component';

describe('EventcelandarComponent', () => {
  let component: EventcelandarComponent;
  let fixture: ComponentFixture<EventcelandarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcelandarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcelandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
