import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkstatsComponent } from './networkstats.component';

describe('NetworkstatsComponent', () => {
  let component: NetworkstatsComponent;
  let fixture: ComponentFixture<NetworkstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
