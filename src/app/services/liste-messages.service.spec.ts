import { ListeMessagesService } from './liste-messages.service';
import { Message } from 'src/app/modeles/message.modele';

describe('ListeMessagesService', () => {

  let service: ListeMessagesService;
  beforeEach(() => { service = new ListeMessagesService(); });

  it('should add two integers', () => {

    // exemple de test de base !!
    const deux = 2;
    const trois = 3;

    expect(service.addPlus(deux, trois)).toBe(5);

  });

  it('should delete message', () => {

    // Echec : à refaire
    const messages: Message[] = [
      {titre: 'aaa', corps: 'aaa', numero: 1},
      {titre: 'bbb', corps: 'bbb', numero: 2},
    ];

    const message: Message = {titre: 'aaa', corps: 'aaa', numero: 1};

    expect(service.deleteMessage(message)).toBeTruthy();

  });

});
