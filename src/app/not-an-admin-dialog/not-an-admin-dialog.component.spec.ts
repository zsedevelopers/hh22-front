import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAnAdminDialogComponent } from './not-an-admin-dialog.component';

describe('NotAnAdminDialogComponent', () => {
  let component: NotAnAdminDialogComponent;
  let fixture: ComponentFixture<NotAnAdminDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAnAdminDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAnAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
