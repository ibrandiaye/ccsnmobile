import { Component } from '@angular/core';

@Component({
  selector: 'app-mtp-modifier',
  templateUrl: './mtp-modifier.page.html',
  styleUrls: ['./mtp-modifier.page.scss'],
})
export class MtpModifierPage {
  constructor() {}

  modifyPassword() {
    // Logique pour modifier le mot de passe
    console.log('Mot de passe modifié');
  }
}
