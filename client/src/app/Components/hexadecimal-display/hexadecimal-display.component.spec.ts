import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexadecimalDisplayComponent } from './hexadecimal-display.component';

describe('HexadecimalDisplayComponent', () => {
  let component: HexadecimalDisplayComponent;
  let fixture: ComponentFixture<HexadecimalDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexadecimalDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexadecimalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
