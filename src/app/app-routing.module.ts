import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeMessagesComponent } from 'src/app/liste-messages/liste-messages.component';
import { AccueilComponent } from 'src/app/accueil/accueil.component';
import { AjouterMessageComponent } from 'src/app/ajouter-message/ajouter-message.component';
import { ErreurComponent } from 'src/app/erreur/erreur.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'messages', component: ListeMessagesComponent},
  { path: 'ajouter-message', component: AjouterMessageComponent },
  { path: '**', component: ErreurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
