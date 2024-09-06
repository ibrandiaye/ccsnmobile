import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MtpModifierPage } from './mtp-modifier.page';

describe('MtpModifierPage', () => {
  let component: MtpModifierPage;
  let fixture: ComponentFixture<MtpModifierPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MtpModifierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
