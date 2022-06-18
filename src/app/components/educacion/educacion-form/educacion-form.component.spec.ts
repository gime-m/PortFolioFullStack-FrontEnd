import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionFormComponent } from './educacion-form.component';

describe('FormComponent', () => {
  let component: EducacionFormComponent;
  let fixture: ComponentFixture<EducacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
