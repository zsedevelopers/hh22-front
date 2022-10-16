import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIdentityCardFormComponent } from './add-identity-card-form.component';

describe('AddIdentityCardFormComponent', () => {
  let component: AddIdentityCardFormComponent;
  let fixture: ComponentFixture<AddIdentityCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIdentityCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIdentityCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
