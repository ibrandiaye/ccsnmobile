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
  },
  {
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

  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'tab6',
    loadChildren: () => import('./tab6/tab6.module').then( m => m.Tab6PageModule)
  },  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'reinitialiser',
    loadChildren: () => import('./reinitialiser/reinitialiser.module').then( m => m.ReinitialiserPageModule)
  },
  {
    path: 'nouveau-mtp',
    loadChildren: () => import('./nouveau-mtp/nouveau-mtp.module').then( m => m.NouveauMtpPageModule)
  },
  {
    path: 'mtp-modifier',
    loadChildren: () => import('./mtp-modifier/mtp-modifier.module').then( m => m.MtpModifierPageModule)
  },
  {
    path: 'succes-mtp',
    loadChildren: () => import('./succes-mtp/succes-mtp.module').then( m => m.SuccesMtpPageModule)
  }


 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
