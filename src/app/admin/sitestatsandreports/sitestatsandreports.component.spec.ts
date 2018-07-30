import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitestatsandreportsComponent } from './sitestatsandreports.component';

describe('SitestatsandreportsComponent', () => {
  let component: SitestatsandreportsComponent;
  let fixture: ComponentFixture<SitestatsandreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitestatsandreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitestatsandreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
