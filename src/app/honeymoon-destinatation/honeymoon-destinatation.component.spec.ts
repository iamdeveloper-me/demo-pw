import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneymoonDestinatationComponent } from './honeymoon-destinatation.component';

describe('HoneymoonDestinatationComponent', () => {
  let component: HoneymoonDestinatationComponent;
  let fixture: ComponentFixture<HoneymoonDestinatationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneymoonDestinatationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneymoonDestinatationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
