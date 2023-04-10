import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomGeneratorPageComponent } from './random-generator-page.component';

describe('RandomGeneratorPageComponent', () => {
  let component: RandomGeneratorPageComponent;
  let fixture: ComponentFixture<RandomGeneratorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomGeneratorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
