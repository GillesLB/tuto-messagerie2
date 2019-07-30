import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMessagesComponent } from './liste-messages.component';
import { Message } from 'src/app/modeles/message.modele';

describe('ListeMessagesComponent', () => {
  let listeMessagesComponent: ListeMessagesComponent;
  let fixture: ComponentFixture<ListeMessagesComponent>;
  const testMessage: Message = {titre: 'Bla', corps: 'Bla', numero: 1};

  beforeEach(async(() => {
    // TestBed : crée un env. de test similaire à un module Angular
    // configureTestingModule : simule un @NgModule
    TestBed.configureTestingModule({
      declarations: [ ListeMessagesComponent ]
    })
    // retourne une promise
    .compileComponents();
  }));

  beforeEach(() => {
    // createComponent : instancie le composant en param. et retourne un objet ComponentFixture
    // permettant de contrôler et inspecter le composant
    fixture = TestBed.createComponent(ListeMessagesComponent);
    // componentInstance : instance de le classe ListeMessagesComponent
    listeMessagesComponent = fixture.componentInstance;
    // detectChanges : déclenche un "change detection"
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(listeMessagesComponent).toBeTruthy();
  });
  // test de ...test !
  it('no message should delete return false', () => {
    expect(listeMessagesComponent.onDeleteMessage({})).toBeFalsy();
  });
  // ???
  it('message should delete return true', () => {
    expect(listeMessagesComponent.onDeleteMessage(this.testMessage)).toBeTruthy();
  });

});
