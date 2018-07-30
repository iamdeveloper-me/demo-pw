import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminadvertisingComponent } from './adminadvertising.component';

describe('AdminadvertisingComponent', () => {
  let component: AdminadvertisingComponent;
  let fixture: ComponentFixture<AdminadvertisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminadvertisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminadvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
