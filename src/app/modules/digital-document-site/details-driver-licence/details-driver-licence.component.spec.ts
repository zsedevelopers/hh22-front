import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDriverLicenceComponent } from './details-driver-licence.component';

describe('DetailsDriverLicenceComponent', () => {
  let component: DetailsDriverLicenceComponent;
  let fixture: ComponentFixture<DetailsDriverLicenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDriverLicenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDriverLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
