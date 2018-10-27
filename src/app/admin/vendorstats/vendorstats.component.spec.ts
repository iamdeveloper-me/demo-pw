import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorstatsComponent } from './vendorstats.component';

describe('VendorstatsComponent', () => {
  let component: VendorstatsComponent;
  let fixture: ComponentFixture<VendorstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
