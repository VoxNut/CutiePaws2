import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedPetComponent } from './adopted-pet.component';

describe('AdoptedPetComponent', () => {
  let component: AdoptedPetComponent;
  let fixture: ComponentFixture<AdoptedPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdoptedPetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptedPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
