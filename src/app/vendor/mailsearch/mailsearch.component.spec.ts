import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsearchComponent } from './mailsearch.component';

describe('MailsearchComponent', () => {
  let component: MailsearchComponent;
  let fixture: ComponentFixture<MailsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
