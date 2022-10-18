import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalDocumentPanelComponent } from './digital-document-panel.component';

describe('DigitalDocumentPanelComponent', () => {
  let component: DigitalDocumentPanelComponent;
  let fixture: ComponentFixture<DigitalDocumentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalDocumentPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalDocumentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
