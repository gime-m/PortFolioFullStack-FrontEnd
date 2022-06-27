import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionImagenFormComponent } from './educacion-imagen-form.component';

describe('EducacionImagenFormComponent', () => {
  let component: EducacionImagenFormComponent;
  let fixture: ComponentFixture<EducacionImagenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionImagenFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionImagenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
