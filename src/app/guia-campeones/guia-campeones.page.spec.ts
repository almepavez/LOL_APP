import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuiaCampeonesPage } from './guia-campeones.page';

describe('GuiaCampeonesPage', () => {
  let component: GuiaCampeonesPage;
  let fixture: ComponentFixture<GuiaCampeonesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuiaCampeonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
