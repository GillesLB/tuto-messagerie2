import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeMessagesComponent } from './liste-messages/liste-messages.component';
import { AjouterMessageComponent } from './ajouter-message/ajouter-message.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ListeMessagesService } from 'src/app/services/liste-messages.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListeMessagesComponent,
    AjouterMessageComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ErreurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ListeMessagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
