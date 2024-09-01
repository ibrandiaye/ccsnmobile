import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailProduitAchatPage } from './detail-produit-achat.page';

describe('DetailProduitAchatPage', () => {
  let component: DetailProduitAchatPage;
  let fixture: ComponentFixture<DetailProduitAchatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProduitAchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
