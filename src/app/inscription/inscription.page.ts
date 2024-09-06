import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage {
  nom: string = '';
  email: string = '';
  countryCode: string = '+221';
  telephone: string = '';
  password: string = '';

  constructor() {}

  onInscription() {
    // Traitez les données du formulaire ici (par exemple, envoyez-les à une API)
    console.log('Inscription avec les informations suivantes :');
    console.log(`Nom: ${this.nom}`);
    console.log(`Email: ${this.email}`);
    console.log(`Téléphone: ${this.countryCode}${this.telephone}`);
    console.log(`Mot de passe: ${this.password}`);
  }
}
