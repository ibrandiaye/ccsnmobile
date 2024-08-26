import { Component, OnInit } from '@angular/core';
import { CcsnserviceService } from '../ccsnservice.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
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
