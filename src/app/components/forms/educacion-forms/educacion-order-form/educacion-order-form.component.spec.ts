import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionOrderFormComponent } from './educacion-order-form.component';

describe('EducacionOrderFormComponent', () => {
  let component: EducacionOrderFormComponent;
  let fixture: ComponentFixture<EducacionOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionOrderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
