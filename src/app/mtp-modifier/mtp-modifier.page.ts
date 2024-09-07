import { Component } from '@angular/core';

@Component({
  selector: 'app-mtp-modifier',
  templateUrl: './mtp-modifier.page.html',
  styleUrls: ['./mtp-modifier.page.scss'],
})
export class MtpModifierPage {
  // Déclaration des propriétés
  newPassword: string ='';
  confirmPassword: string ='';

  constructor() { }

  // Méthode pour gérer la modification du mot de passe
  modifyPassword() {
    if (this.newPassword === this.confirmPassword) {
      console.log('Mot de passe modifié avec succès');
      // Ajouter ici la logique pour modifier le mot de passe (appel API, etc.)
    } else {
      console.log('Les mots de passe ne correspondent pas');
    }
  }
}
