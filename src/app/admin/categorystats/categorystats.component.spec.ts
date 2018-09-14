import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorystatsComponent } from './categorystats.component';

describe('CategorystatsComponent', () => {
  let component: CategorystatsComponent;
  let fixture: ComponentFixture<CategorystatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorystatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorystatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
