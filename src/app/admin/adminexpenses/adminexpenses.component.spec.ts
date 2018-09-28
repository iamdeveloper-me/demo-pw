import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminexpensesComponent } from './adminexpenses.component';

describe('AdminexpensesComponent', () => {
  let component: AdminexpensesComponent;
  let fixture: ComponentFixture<AdminexpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminexpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
