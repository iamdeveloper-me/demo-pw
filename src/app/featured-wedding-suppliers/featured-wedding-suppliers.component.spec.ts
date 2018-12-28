import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedWeddingSuppliersComponent } from './featured-wedding-suppliers.component';

describe('FeaturedWeddingSuppliersComponent', () => {
  let component: FeaturedWeddingSuppliersComponent;
  let fixture: ComponentFixture<FeaturedWeddingSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedWeddingSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedWeddingSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
