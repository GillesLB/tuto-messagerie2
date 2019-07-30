import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Message } from 'src/app/modeles/message.modele';
import { ListeMessagesService } from 'src/app/services/liste-messages.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-message',
  templateUrl: './ajouter-message.component.html',
  styleUrls: ['./ajouter-message.component.css']
})
export class AjouterMessageComponent implements OnInit {

  totalMessages: number;
  messages: Message[] = [];

  messages$: Observable<any>;

  ajouterMessageForm: FormGroup;

  constructor(
    private listeMessagesService: ListeMessagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.messages$ = this.listeMessagesService.getMessages();
    this.messages$.subscribe((message) => { this.messages = message; });

    this.ajouterMessageForm = new FormGroup({
      titre: new FormControl(),
      corps: new FormControl(),
    });
  }

  ajouterMessage() {
    const titre = this.ajouterMessageForm.get('titre').value;
    const corps = this.ajouterMessageForm.get('corps').value;
    this.totalMessages = this.messages.length;
    const numero = this.totalMessages + 1;
    const messageAAjouter = new Message(titre, corps, numero);

    this.listeMessagesService.messages.push(messageAAjouter);
    this.router.navigate(['messages']);
  }

}
