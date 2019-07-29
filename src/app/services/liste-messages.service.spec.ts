import { TestBed } from '@angular/core/testing';

import { ListeMessagesService } from './liste-messages.service';

describe('ListeMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeMessagesService = TestBed.get(ListeMessagesService);
    expect(service).toBeTruthy();
  });
});
