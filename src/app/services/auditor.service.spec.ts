import { TestBed } from '@angular/core/testing';

import { AuditorService } from './auditor.service';

describe('AuditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers:[AuditorService]}));

  it('should be created', () => {
    const service: AuditorService = TestBed.get(AuditorService);
    expect(service).toBeTruthy();
  });
});
