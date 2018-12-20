import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamWeddingLocationsComponent } from './dream-wedding-locations.component';

describe('DreamWeddingLocationsComponent', () => {
  let component: DreamWeddingLocationsComponent;
  let fixture: ComponentFixture<DreamWeddingLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamWeddingLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamWeddingLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
