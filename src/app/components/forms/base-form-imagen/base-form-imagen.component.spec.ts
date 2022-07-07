import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormImagenComponent } from './base-form-imagen.component';

describe('ImagenBaseFormComponent', () => {
  let component: BaseFormImagenComponent;
  let fixture: ComponentFixture<BaseFormImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseFormImagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFormImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
