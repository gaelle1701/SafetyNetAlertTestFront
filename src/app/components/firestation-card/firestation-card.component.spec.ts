import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestationCardComponent } from './firestation-card.component';

describe('FirestationCardComponent', () => {
  let component: FirestationCardComponent;
  let fixture: ComponentFixture<FirestationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirestationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
