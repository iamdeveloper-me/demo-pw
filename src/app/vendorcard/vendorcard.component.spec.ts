import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorcardComponent } from './vendorcard.component';

describe('VendorcardComponent', () => {
  let component: VendorcardComponent;
  let fixture: ComponentFixture<VendorcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
