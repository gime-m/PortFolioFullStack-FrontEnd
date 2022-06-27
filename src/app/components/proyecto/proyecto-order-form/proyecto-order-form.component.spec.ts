import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoOrderFormComponent } from './proyecto-order-form.component';

describe('ProyectoOrderFormComponent', () => {
  let component: ProyectoOrderFormComponent;
  let fixture: ComponentFixture<ProyectoOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoOrderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
