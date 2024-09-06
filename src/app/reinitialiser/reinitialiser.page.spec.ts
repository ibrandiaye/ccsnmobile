import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReinitialiserPage } from './reinitialiser.page';

describe('ReinitialiserPage', () => {
  let component: ReinitialiserPage;
  let fixture: ComponentFixture<ReinitialiserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinitialiserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
