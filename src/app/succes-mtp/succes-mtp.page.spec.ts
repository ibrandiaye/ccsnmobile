import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccesMtpPage } from './succes-mtp.page';

describe('SuccesMtpPage', () => {
  let component: SuccesMtpPage;
  let fixture: ComponentFixture<SuccesMtpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesMtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
