import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery0Component } from './gallery0.component';

describe('Gallery0Component', () => {
  let component: Gallery0Component;
  let fixture: ComponentFixture<Gallery0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
