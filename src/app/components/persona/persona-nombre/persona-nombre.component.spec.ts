import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaNombreComponent } from './persona-nombre.component';

describe('BannerNameComponent', () => {
  let component: PersonaNombreComponent;
  let fixture: ComponentFixture<PersonaNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
