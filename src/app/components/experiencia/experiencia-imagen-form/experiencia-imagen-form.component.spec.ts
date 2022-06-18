import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaImagenFormComponent } from './experiencia-imagen-form.component';

describe('ExperienciaImagenFormComponent', () => {
  let component: ExperienciaImagenFormComponent;
  let fixture: ComponentFixture<ExperienciaImagenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaImagenFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaImagenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
