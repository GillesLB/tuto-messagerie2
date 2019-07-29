import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMessageComponent } from './ajouter-message.component';

describe('AjouterMessageComponent', () => {
  let component: AjouterMessageComponent;
  let fixture: ComponentFixture<AjouterMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
