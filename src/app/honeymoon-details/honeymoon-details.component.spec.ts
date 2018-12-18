import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneymoonDetailsComponent } from './honeymoon-details.component';

describe('HoneymoonDetailsComponent', () => {
  let component: HoneymoonDetailsComponent;
  let fixture: ComponentFixture<HoneymoonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneymoonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneymoonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
