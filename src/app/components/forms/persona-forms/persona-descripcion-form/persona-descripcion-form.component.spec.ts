import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaDescripcionFormComponent } from './persona-descripcion-form.component';

describe('AboutMeDescripcionFormComponent', () => {
  let component: PersonaDescripcionFormComponent;
  let fixture: ComponentFixture<PersonaDescripcionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaDescripcionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaDescripcionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
