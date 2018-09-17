import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesstatsComponent } from './salesstats.component';

describe('SalesstatsComponent', () => {
  let component: SalesstatsComponent;
  let fixture: ComponentFixture<SalesstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
