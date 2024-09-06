import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NouveauMtpPage } from './nouveau-mtp.page';

describe('NouveauMtpPage', () => {
  let component: NouveauMtpPage;
  let fixture: ComponentFixture<NouveauMtpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauMtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
