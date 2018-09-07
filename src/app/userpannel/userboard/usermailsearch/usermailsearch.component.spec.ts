import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermailsearchComponent } from './usermailsearch.component';

describe('UsermailsearchComponent', () => {
  let component: UsermailsearchComponent;
  let fixture: ComponentFixture<UsermailsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermailsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermailsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
