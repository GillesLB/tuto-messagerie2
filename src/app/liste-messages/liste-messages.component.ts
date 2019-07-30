import { Component, OnInit } from '@angular/core';

import { Message } from 'src/app/modeles/message.modele';
import { Observable } from 'rxjs';
import { ListeMessagesService } from 'src/app/services/liste-messages.service';
import { listeMessages } from 'src/app/liste-messages/liste-messages';

@Component({
  selector: 'app-liste-messages',
  templateUrl: './liste-messages.component.html',
  styleUrls: ['./liste-messages.component.css']
})
export class ListeMessagesComponent implements OnInit {

  messages: Message[];

  messages$: Observable<any>;

  constructor(
    private listeMessagesService: ListeMessagesService,
  ) { }

  ngOnInit() {
    this.messages$ = this.listeMessagesService.getMessages();
    this.messages$.subscribe((message) => { this.messages = message; });
  }

  onDeleteMessage(message) {
    console.log('M : ', message);
    this.listeMessagesService.deleteMessage(message);
  }
}
