import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireRequestListComponent } from './hire-request-list.component';

describe('HireRequestListComponent', () => {
  let component: HireRequestListComponent;
  let fixture: ComponentFixture<HireRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireRequestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
