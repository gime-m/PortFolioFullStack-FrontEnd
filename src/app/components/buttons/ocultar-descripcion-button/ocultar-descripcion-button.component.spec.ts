import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcultarDescripcionButtonComponent } from './ocultar-descripcion-button.component';

describe('OcultarDescripcionButtonComponent', () => {
  let component: OcultarDescripcionButtonComponent;
  let fixture: ComponentFixture<OcultarDescripcionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcultarDescripcionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcultarDescripcionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
