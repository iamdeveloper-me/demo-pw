import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierByCateComponent } from './supplier-by-cate.component';

describe('SupplierByCateComponent', () => {
  let component: SupplierByCateComponent;
  let fixture: ComponentFixture<SupplierByCateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierByCateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierByCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
