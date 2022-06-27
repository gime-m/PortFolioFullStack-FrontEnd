import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNameFormComponent } from './banner-name-form.component';

describe('BannerNameFormComponent', () => {
  let component: BannerNameFormComponent;
  let fixture: ComponentFixture<BannerNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerNameFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
