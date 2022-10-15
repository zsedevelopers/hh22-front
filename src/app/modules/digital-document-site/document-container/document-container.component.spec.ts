import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentContainerComponent } from './document-container.component';

describe('DocumentContainerComponent', () => {
  let component: DocumentContainerComponent;
  let fixture: ComponentFixture<DocumentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
