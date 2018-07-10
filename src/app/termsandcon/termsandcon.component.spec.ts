import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandconComponent } from './termsandcon.component';

describe('TermsandconComponent', () => {
  let component: TermsandconComponent;
  let fixture: ComponentFixture<TermsandconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsandconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsandconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
