import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicProjectPanelComponent } from './civic-project-panel.component';

describe('CivicProjectPanelComponent', () => {
  let component: CivicProjectPanelComponent;
  let fixture: ComponentFixture<CivicProjectPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivicProjectPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivicProjectPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
