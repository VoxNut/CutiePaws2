import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPageComponent } from './personal-page.component';

describe('PersonalPageComponent', () => {
  let component: PersonalPageComponent;
  let fixture: ComponentFixture<PersonalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
