import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Albumsetting2Component } from './albumsetting2.component';

describe('Albumsetting2Component', () => {
  let component: Albumsetting2Component;
  let fixture: ComponentFixture<Albumsetting2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Albumsetting2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Albumsetting2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
