import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialfeedComponent } from './socialfeed.component';

describe('SocialfeedComponent', () => {
  let component: SocialfeedComponent;
  let fixture: ComponentFixture<SocialfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
