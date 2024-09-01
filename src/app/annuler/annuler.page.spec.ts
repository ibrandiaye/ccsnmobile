import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnulerPage } from './annuler.page';

describe('AnnulerPage', () => {
  let component: AnnulerPage;
  let fixture: ComponentFixture<AnnulerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnulerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
