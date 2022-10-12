import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCivicProjectComponent } from './add-civic-project.component';

describe('AddCivicProjectComponent', () => {
  let component: AddCivicProjectComponent;
  let fixture: ComponentFixture<AddCivicProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCivicProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCivicProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
