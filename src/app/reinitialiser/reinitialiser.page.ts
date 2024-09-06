import { Component } from '@angular/core';

@Component({
  selector: 'app-reinitialiser',
  templateUrl: './reinitialiser.page.html',
  styleUrls: ['./reinitialiser.page.scss'],
})
export class ReinitialiserPage {
  password: string =''

  constructor() {}

  onResetPassword() {
    // Logique pour réinitialiser le mot de passe ici
    console.log("Mot de passe:", this.password);
  }
}
