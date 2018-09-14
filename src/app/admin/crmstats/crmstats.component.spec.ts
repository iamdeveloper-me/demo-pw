import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMstatsComponent } from './crmstats.component';

describe('CRMstatsComponent', () => {
  let component: CRMstatsComponent;
  let fixture: ComponentFixture<CRMstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRMstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRMstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
