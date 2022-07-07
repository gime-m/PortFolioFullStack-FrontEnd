import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoImagenGrandeComponent } from './proyecto-imagen-grande.component';

describe('ProyectoImagenGrandeComponent', () => {
  let component: ProyectoImagenGrandeComponent;
  let fixture: ComponentFixture<ProyectoImagenGrandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoImagenGrandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoImagenGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
