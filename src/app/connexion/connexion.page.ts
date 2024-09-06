import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage {
  email: string = '';
  password: string =''

  constructor() {}

  onLogin() {
    // Logique de connexion ici
    console.log("Email:", this.email);
    console.log("Password:", this.password);
  }
}
