import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNameComponent } from './banner-name.component';

describe('BannerNameComponent', () => {
  let component: BannerNameComponent;
  let fixture: ComponentFixture<BannerNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
