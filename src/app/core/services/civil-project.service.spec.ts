import { TestBed } from '@angular/core/testing';

import { CivilProjectService } from './civil-project.service';

describe('CivilProjectService', () => {
  let service: CivilProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CivilProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
