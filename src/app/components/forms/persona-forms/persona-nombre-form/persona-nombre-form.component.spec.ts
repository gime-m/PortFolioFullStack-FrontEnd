import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaNombreFormComponent } from './persona-nombre-form.component';

describe('BannerNameFormComponent', () => {
  let component: PersonaNombreFormComponent;
  let fixture: ComponentFixture<PersonaNombreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaNombreFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaNombreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
