import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedioviewComponent } from './vedioview.component';

describe('VedioviewComponent', () => {
  let component: VedioviewComponent;
  let fixture: ComponentFixture<VedioviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedioviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedioviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
