import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListFirestationsComponent } from './page-list-firestations.component';

describe('PageListFirestationsComponent', () => {
  let component: PageListFirestationsComponent;
  let fixture: ComponentFixture<PageListFirestationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListFirestationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListFirestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
