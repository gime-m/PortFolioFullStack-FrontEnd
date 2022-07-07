import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaInfoPersonalComponent } from './persona-info-personal.component';

describe('AboutMeInfoComponent', () => {
  let component: PersonaInfoPersonalComponent;
  let fixture: ComponentFixture<PersonaInfoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaInfoPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaInfoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
