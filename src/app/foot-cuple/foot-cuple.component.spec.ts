import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootCupleComponent } from './foot-cuple.component';

describe('FootCupleComponent', () => {
  let component: FootCupleComponent;
  let fixture: ComponentFixture<FootCupleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootCupleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootCupleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
