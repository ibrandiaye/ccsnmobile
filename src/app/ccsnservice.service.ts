import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from './model/categorie.model';
import { Produit } from './model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class CcsnserviceService {


    
  //private baseUrl = 'https://sakhal.jafrchir.org/api'; http://127.0.0.1:8000/api http://localhost/aps/public/api
  private baseUrl = "http://127.0.0.1:8000/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  };
  constructor(private http: HttpClient) 
  {

   }
   getAllCategorie():Observable<Categorie[]>
   {
       return this.http.get<Categorie[]>(`${this.baseUrl}/all/categories`, this.httpOptions);
 
   }
   getAllProduit():Observable<Produit[]>
   {
       return this.http.get<Produit[]>(`${this.baseUrl}/all/produits`, this.httpOptions);
 
   }
   
}
