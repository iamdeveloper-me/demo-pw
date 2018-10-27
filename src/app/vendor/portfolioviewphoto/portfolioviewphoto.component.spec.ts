import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioviewphotoComponent } from './portfolioviewphoto.component';

describe('PortfolioviewphotoComponent', () => {
  let component: PortfolioviewphotoComponent;
  let fixture: ComponentFixture<PortfolioviewphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioviewphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioviewphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
