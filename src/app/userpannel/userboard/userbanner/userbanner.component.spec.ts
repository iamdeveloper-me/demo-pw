import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbannerComponent } from './userbanner.component';

describe('UserbannerComponent', () => {
  let component: UserbannerComponent;
  let fixture: ComponentFixture<UserbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
