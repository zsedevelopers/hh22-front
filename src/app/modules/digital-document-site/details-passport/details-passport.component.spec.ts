import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPassportComponent } from './details-passport.component';

describe('DetailsPassportComponent', () => {
  let component: DetailsPassportComponent;
  let fixture: ComponentFixture<DetailsPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPassportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
