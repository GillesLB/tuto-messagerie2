import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMessagesComponent } from './liste-messages.component';

describe('ListeMessagesComponent', () => {
  let component: ListeMessagesComponent;
  let fixture: ComponentFixture<ListeMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
