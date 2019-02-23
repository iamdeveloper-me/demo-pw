import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneymoonSearchResultComponent } from './honeymoon-search-result.component';

describe('HoneymoonSearchResultComponent', () => {
  let component: HoneymoonSearchResultComponent;
  let fixture: ComponentFixture<HoneymoonSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneymoonSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneymoonSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
