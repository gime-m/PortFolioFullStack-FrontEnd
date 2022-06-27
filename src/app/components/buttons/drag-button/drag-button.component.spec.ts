import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragButtonComponent } from './drag-button.component';

describe('DragButtonComponent', () => {
  let component: DragButtonComponent;
  let fixture: ComponentFixture<DragButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
