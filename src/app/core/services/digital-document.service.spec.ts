import { TestBed } from '@angular/core/testing';

import { DigitalDocumentService } from './digital-document.service';

describe('DigitalDocumentService', () => {
  let service: DigitalDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitalDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
