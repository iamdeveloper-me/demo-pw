import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsettingComponent } from './albumsetting.component';

describe('AlbumsettingComponent', () => {
  let component: AlbumsettingComponent;
  let fixture: ComponentFixture<AlbumsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
