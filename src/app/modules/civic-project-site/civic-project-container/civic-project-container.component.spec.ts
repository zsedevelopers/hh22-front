import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicProjectContainerComponent } from './civic-project-container.component';

describe('CivicProjectContainerComponent', () => {
  let component: CivicProjectContainerComponent;
  let fixture: ComponentFixture<CivicProjectContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivicProjectContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivicProjectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
