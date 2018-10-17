import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotogallerydetailComponent } from './photogallerydetail.component';

describe('PhotogallerydetailComponent', () => {
  let component: PhotogallerydetailComponent;
  let fixture: ComponentFixture<PhotogallerydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotogallerydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotogallerydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
