import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { CcsnserviceService } from '../ccsnservice.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page  {

  produits: Array<Produit>=[];
  constructor(private ccsnservice:CcsnserviceService) {}

  ngOnInit(): void {
    this.getAllProduits();
  }

  getAllProduits()
  {
    this.ccsnservice.getAllProduit().subscribe({next:resp=>{
        this.produits = resp;
        console.log(resp);
    },
  error:err=>{
    console.log(err);
  }})
  }

}
