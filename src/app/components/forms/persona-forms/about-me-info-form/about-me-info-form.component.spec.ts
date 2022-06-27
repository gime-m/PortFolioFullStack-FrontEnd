import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeInfoFormComponent } from './about-me-info-form.component';

describe('AboutMeInfoFormComponent', () => {
  let component: AboutMeInfoFormComponent;
  let fixture: ComponentFixture<AboutMeInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
