import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampeonesPage } from './campeones.page';

describe('CampeonesPage', () => {
  let component: CampeonesPage;
  let fixture: ComponentFixture<CampeonesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CampeonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
