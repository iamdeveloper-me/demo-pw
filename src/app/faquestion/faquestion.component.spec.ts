import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaquestionComponent } from './faquestion.component';

describe('FaquestionComponent', () => {
  let component: FaquestionComponent;
  let fixture: ComponentFixture<FaquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
