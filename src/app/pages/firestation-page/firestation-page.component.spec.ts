import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestationPageComponent } from './firestation-page.component';

describe('FirestationPageComponent', () => {
  let component: FirestationPageComponent;
  let fixture: ComponentFixture<FirestationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirestationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
