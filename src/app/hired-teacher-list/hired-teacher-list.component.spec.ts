import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredTeacherListComponent } from './hired-teacher-list.component';

describe('HiredTeacherListComponent', () => {
  let component: HiredTeacherListComponent;
  let fixture: ComponentFixture<HiredTeacherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiredTeacherListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredTeacherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
