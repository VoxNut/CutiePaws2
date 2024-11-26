import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipPatternComponent } from './chip-pattern.component';

describe('ChipPatternComponent', () => {
  let component: ChipPatternComponent;
  let fixture: ComponentFixture<ChipPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
