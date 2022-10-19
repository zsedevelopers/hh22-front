import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminPanelComponent } from './add-admin-panel.component';

describe('AddAdminPanelComponent', () => {
  let component: AddAdminPanelComponent;
  let fixture: ComponentFixture<AddAdminPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
