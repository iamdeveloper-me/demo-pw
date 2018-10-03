import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierbylocationComponent } from './supplierbylocation.component';

describe('SupplierbylocationComponent', () => {
  let component: SupplierbylocationComponent;
  let fixture: ComponentFixture<SupplierbylocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierbylocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierbylocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
