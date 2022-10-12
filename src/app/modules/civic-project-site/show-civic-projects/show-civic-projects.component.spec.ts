import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCivicProjectsComponent } from './show-civic-projects.component';

describe('ShowCivicProjectsComponent', () => {
  let component: ShowCivicProjectsComponent;
  let fixture: ComponentFixture<ShowCivicProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCivicProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCivicProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
