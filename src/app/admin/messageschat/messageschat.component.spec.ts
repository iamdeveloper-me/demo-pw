import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageschatComponent } from './messageschat.component';

describe('MessageschatComponent', () => {
  let component: MessageschatComponent;
  let fixture: ComponentFixture<MessageschatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageschatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageschatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
