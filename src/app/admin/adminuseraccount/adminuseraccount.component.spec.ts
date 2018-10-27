import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuseraccountComponent } from './adminuseraccount.component';

describe('AdminuseraccountComponent', () => {
  let component: AdminuseraccountComponent;
  let fixture: ComponentFixture<AdminuseraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminuseraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuseraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
