import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierByCityComponent } from './supplier-by-city.component';

describe('SupplierByCityComponent', () => {
  let component: SupplierByCityComponent;
  let fixture: ComponentFixture<SupplierByCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierByCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
