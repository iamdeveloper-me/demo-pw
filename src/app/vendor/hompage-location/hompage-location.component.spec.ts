import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HompageLocationComponent } from './hompage-location.component';

describe('HompageLocationComponent', () => {
  let component: HompageLocationComponent;
  let fixture: ComponentFixture<HompageLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HompageLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HompageLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
