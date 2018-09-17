import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccountlistComponent } from './useraccountlist.component';

describe('UseraccountlistComponent', () => {
  let component: UseraccountlistComponent;
  let fixture: ComponentFixture<UseraccountlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseraccountlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraccountlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
