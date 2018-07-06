import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsidebarComponent } from './vendorsidebar.component';

describe('VendorsidebarComponent', () => {
  let component: VendorsidebarComponent;
  let fixture: ComponentFixture<VendorsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
