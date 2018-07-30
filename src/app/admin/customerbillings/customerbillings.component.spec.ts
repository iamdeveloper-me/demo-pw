import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbillingsComponent } from './customerbillings.component';

describe('CustomerbillingsComponent', () => {
  let component: CustomerbillingsComponent;
  let fixture: ComponentFixture<CustomerbillingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerbillingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerbillingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
