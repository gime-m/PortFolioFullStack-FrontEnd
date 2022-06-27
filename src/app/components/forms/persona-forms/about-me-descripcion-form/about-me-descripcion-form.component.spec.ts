import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeDescripcionFormComponent } from './about-me-descripcion-form.component';

describe('AboutMeDescripcionFormComponent', () => {
  let component: AboutMeDescripcionFormComponent;
  let fixture: ComponentFixture<AboutMeDescripcionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeDescripcionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeDescripcionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
