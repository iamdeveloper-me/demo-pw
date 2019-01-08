import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderComComponent } from './calender-com.component';

describe('CalenderComComponent', () => {
  let component: CalenderComComponent;
  let fixture: ComponentFixture<CalenderComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
