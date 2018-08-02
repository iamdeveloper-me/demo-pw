import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioviewComponent } from './portfolioview.component';

describe('PortfolioviewComponent', () => {
  let component: PortfolioviewComponent;
  let fixture: ComponentFixture<PortfolioviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
