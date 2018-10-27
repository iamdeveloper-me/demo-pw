import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerybarComponent } from './gallerybar.component';

describe('GallerybarComponent', () => {
  let component: GallerybarComponent;
  let fixture: ComponentFixture<GallerybarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerybarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
