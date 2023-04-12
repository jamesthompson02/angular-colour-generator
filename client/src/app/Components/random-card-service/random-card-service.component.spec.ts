import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCardServiceComponent } from './random-card-service.component';

describe('RandomCardServiceComponent', () => {
  let component: RandomCardServiceComponent;
  let fixture: ComponentFixture<RandomCardServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomCardServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomCardServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
