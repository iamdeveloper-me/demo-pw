import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincalenderComponent } from './admincalender.component';

describe('AdmincalenderComponent', () => {
  let component: AdmincalenderComponent;
  let fixture: ComponentFixture<AdmincalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
