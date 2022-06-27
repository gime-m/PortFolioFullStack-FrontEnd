import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenItemFormComponent } from './imagen-item-form.component';

describe('ImagenFormComponent', () => {
  let component: ImagenItemFormComponent;
  let fixture: ComponentFixture<ImagenItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
