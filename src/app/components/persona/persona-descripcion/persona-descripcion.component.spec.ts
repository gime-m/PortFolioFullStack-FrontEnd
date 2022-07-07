import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaDescripcionComponent } from './persona-descripcion.component';

describe('AboutMeDescriptionComponent', () => {
  let component: PersonaDescripcionComponent;
  let fixture: ComponentFixture<PersonaDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaDescripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
