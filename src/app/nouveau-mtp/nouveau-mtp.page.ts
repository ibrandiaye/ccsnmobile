import { Component } from '@angular/core';

@Component({
  selector: 'app-nouveau-mtp',
  templateUrl: './nouveau-mtp.page.html',
  styleUrls: ['./nouveau-mtp.page.scss'],
})
export class NouveauMtpPage {
  constructor() {}

  resetPassword() {
    // Logique pour réinitialiser le mot de passe
    console.log('Mot de passe réinitialisé');
  }
}
