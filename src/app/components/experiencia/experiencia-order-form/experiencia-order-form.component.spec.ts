import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaOrderFormComponent } from './experiencia-order-form.component';

describe('ExperienciaOrderFormComponent', () => {
  let component: ExperienciaOrderFormComponent;
  let fixture: ComponentFixture<ExperienciaOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaOrderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
