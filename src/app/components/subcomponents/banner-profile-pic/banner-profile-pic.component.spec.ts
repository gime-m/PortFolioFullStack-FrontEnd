import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProfilePicComponent } from './banner-profile-pic.component';

describe('BannerProfilePicComponent', () => {
  let component: BannerProfilePicComponent;
  let fixture: ComponentFixture<BannerProfilePicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerProfilePicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerProfilePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
