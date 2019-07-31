import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Message } from 'src/app/modeles/message.modele';
import { listeMessages } from 'src/app/liste-messages/liste-messages';


@Injectable({
  providedIn: 'root'
})
export class ListeMessagesService implements OnInit {

  messages: Message[];

  constructor() { this.messages = listeMessages; }

  ngOnInit() {

  }

  getMessages() {
    const messagesObs = new Observable<object>(
      ooo => {
        setTimeout(() => {
          ooo.next(this.messages);
        }, 1000);
      });
    return messagesObs;
  }

  deleteMessage(message) {
    const messageAEnlever = this.messages.findIndex(
      (messageRecherche) => {
        if (messageRecherche === message) {
          return true;
        }
      }
    );
    this.messages.splice(messageAEnlever, 1);
  }

  addPlus(x, y) {
    return x + y;
  }

}
