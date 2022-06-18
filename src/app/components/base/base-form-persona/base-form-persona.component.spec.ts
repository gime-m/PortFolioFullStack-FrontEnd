import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormPersonaComponent } from './base-form-persona.component';

describe('FormComponent', () => {
  let component: BaseFormPersonaComponent;
  let fixture: ComponentFixture<BaseFormPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseFormPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFormPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
