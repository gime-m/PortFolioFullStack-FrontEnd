import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillOrderFormComponent } from './skill-order-form.component';

describe('SkillOrderFormComponent', () => {
  let component: SkillOrderFormComponent;
  let fixture: ComponentFixture<SkillOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillOrderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
