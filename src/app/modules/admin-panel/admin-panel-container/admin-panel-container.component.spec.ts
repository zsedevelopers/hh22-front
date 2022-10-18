import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelContainerComponent } from './admin-panel-container.component';

describe('AdminPanelContainerComponent', () => {
  let component: AdminPanelContainerComponent;
  let fixture: ComponentFixture<AdminPanelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
