import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDriverLicenceFormComponent } from './add-driver-licence-form.component';

describe('AddDriverLicenceFormComponent', () => {
  let component: AddDriverLicenceFormComponent;
  let fixture: ComponentFixture<AddDriverLicenceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDriverLicenceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDriverLicenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
