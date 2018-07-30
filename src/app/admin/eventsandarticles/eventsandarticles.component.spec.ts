import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsandarticlesComponent } from './eventsandarticles.component';

describe('EventsandarticlesComponent', () => {
  let component: EventsandarticlesComponent;
  let fixture: ComponentFixture<EventsandarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsandarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsandarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
