import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteBusinessComponent } from './promote-business.component';

describe('PromoteBusinessComponent', () => {
  let component: PromoteBusinessComponent;
  let fixture: ComponentFixture<PromoteBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoteBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
