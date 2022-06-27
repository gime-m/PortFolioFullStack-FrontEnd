import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormItemComponent } from './base-form-item.component';

describe('BaseFormItemComponent', () => {
  let component: BaseFormItemComponent;
  let fixture: ComponentFixture<BaseFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseFormItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
