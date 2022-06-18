import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoImagenFormComponent } from './proyecto-imagen-form.component';

describe('ProyectoImagenFormComponent', () => {
  let component: ProyectoImagenFormComponent;
  let fixture: ComponentFixture<ProyectoImagenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoImagenFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoImagenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
