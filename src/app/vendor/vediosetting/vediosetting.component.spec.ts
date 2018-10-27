import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VediosettingComponent } from './vediosetting.component';

describe('VediosettingComponent', () => {
  let component: VediosettingComponent;
  let fixture: ComponentFixture<VediosettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VediosettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VediosettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
