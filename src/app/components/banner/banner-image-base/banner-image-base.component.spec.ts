import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerImageBaseComponent } from './banner-image-base.component';

describe('BannerImageBaseComponent', () => {
  let component: BannerImageBaseComponent;
  let fixture: ComponentFixture<BannerImageBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerImageBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerImageBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
