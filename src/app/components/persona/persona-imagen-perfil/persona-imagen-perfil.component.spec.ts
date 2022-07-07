import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaImagenPerfilComponent } from './persona-imagen-perfil.component';

describe('BannerProfilePicComponent', () => {
  let component: PersonaImagenPerfilComponent;
  let fixture: ComponentFixture<PersonaImagenPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaImagenPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaImagenPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
