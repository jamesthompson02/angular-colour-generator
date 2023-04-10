import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSliderPageComponent } from './range-slider-page.component';

describe('RangeSliderPageComponent', () => {
  let component: RangeSliderPageComponent;
  let fixture: ComponentFixture<RangeSliderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeSliderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeSliderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
