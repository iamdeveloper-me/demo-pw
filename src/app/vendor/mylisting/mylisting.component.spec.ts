import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MylistingComponent } from './mylisting.component';

describe('MylistingComponent', () => {
  let component: MylistingComponent;
  let fixture: ComponentFixture<MylistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MylistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
