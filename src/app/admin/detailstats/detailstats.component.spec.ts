import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstatsComponent } from './detailstats.component';

describe('DetailstatsComponent', () => {
  let component: DetailstatsComponent;
  let fixture: ComponentFixture<DetailstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
