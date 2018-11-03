import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipslistComponent } from './tipslist.component';

describe('TipslistComponent', () => {
  let component: TipslistComponent;
  let fixture: ComponentFixture<TipslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
