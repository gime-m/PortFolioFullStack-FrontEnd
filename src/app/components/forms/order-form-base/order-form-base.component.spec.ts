import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormBaseComponent } from './order-form-base.component';

describe('OrderFormComponent', () => {
  let component: OrderFormBaseComponent;
  let fixture: ComponentFixture<OrderFormBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFormBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
