import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaInfoPersonalFormComponent } from './persona-info-personal-form.component';

describe('AboutMeInfoFormComponent', () => {
  let component: PersonaInfoPersonalFormComponent;
  let fixture: ComponentFixture<PersonaInfoPersonalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaInfoPersonalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaInfoPersonalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
