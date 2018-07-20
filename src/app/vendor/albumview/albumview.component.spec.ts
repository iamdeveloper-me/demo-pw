import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumviewComponent } from './albumview.component';

describe('AlbumviewComponent', () => {
  let component: AlbumviewComponent;
  let fixture: ComponentFixture<AlbumviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
