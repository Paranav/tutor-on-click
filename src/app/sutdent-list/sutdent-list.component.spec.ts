import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SutdentListComponent } from './sutdent-list.component';

describe('SutdentListComponent', () => {
  let component: SutdentListComponent;
  let fixture: ComponentFixture<SutdentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SutdentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SutdentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
