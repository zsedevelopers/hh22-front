import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsIdentityCardComponent } from './details-identity-card.component';

describe('DetailsIdentityCardComponent', () => {
  let component: DetailsIdentityCardComponent;
  let fixture: ComponentFixture<DetailsIdentityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsIdentityCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsIdentityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
