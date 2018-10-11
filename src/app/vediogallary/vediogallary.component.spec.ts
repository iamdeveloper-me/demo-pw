import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VediogallaryComponent } from './vediogallary.component';

describe('VediogallaryComponent', () => {
  let component: VediogallaryComponent;
  let fixture: ComponentFixture<VediogallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VediogallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VediogallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
