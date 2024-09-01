import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detail-produit',
    loadChildren: () => import('./detail-produit/detail-produit.module').then( m => m.DetailProduitPageModule)
  },
  {
    path: 'paiement',
    loadChildren: () => import('./paiement/paiement.module').then( m => m.PaiementPageModule)
  },  {
    path: 'detail-produit-achat',
    loadChildren: () => import('./detail-produit-achat/detail-produit-achat.module').then( m => m.DetailProduitAchatPageModule)
  },
  {
    path: 'en-cours',
    loadChildren: () => import('./en-cours/en-cours.module').then( m => m.EnCoursPageModule)
  },
  {
    path: 'annuler',
    loadChildren: () => import('./annuler/annuler.module').then( m => m.AnnulerPageModule)
  },

 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
