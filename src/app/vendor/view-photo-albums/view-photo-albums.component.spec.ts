import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPhotoAlbumsComponent } from './view-photo-albums.component';

describe('ViewPhotoAlbumsComponent', () => {
  let component: ViewPhotoAlbumsComponent;
  let fixture: ComponentFixture<ViewPhotoAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPhotoAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPhotoAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
