import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnCoursPage } from './en-cours.page';

describe('EnCoursPage', () => {
  let component: EnCoursPage;
  let fixture: ComponentFixture<EnCoursPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnCoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
