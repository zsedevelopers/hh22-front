import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocumentsComponent } from './show-documents.component';

describe('ShowDocumentsComponent', () => {
  let component: ShowDocumentsComponent;
  let fixture: ComponentFixture<ShowDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
