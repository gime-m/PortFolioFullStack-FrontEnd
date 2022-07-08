import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDescripcionButtonComponent } from './ver-descripcion-button.component';

describe('VerDescripcionButtonComponent', () => {
  let component: VerDescripcionButtonComponent;
  let fixture: ComponentFixture<VerDescripcionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDescripcionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDescripcionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
