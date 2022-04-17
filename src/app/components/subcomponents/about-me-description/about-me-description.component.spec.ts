import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeDescriptionComponent } from './about-me-description.component';

describe('AboutMeDescriptionComponent', () => {
  let component: AboutMeDescriptionComponent;
  let fixture: ComponentFixture<AboutMeDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
