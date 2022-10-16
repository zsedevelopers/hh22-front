import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPassportFormComponent } from './add-passport-form.component';

describe('AddPassportFormComponent', () => {
  let component: AddPassportFormComponent;
  let fixture: ComponentFixture<AddPassportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPassportFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPassportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
