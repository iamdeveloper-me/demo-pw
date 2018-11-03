import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotogallaryComponent } from './photogallary.component';

describe('PhotogallaryComponent', () => {
  let component: PhotogallaryComponent;
  let fixture: ComponentFixture<PhotogallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotogallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotogallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
