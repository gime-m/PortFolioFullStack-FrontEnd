import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenBaseFormComponent } from './imagen-base-form.component';

describe('ImagenBaseFormComponent', () => {
  let component: ImagenBaseFormComponent;
  let fixture: ComponentFixture<ImagenBaseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenBaseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenBaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
