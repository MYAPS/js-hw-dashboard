import { TestBed } from '@angular/core/testing';

import { UnAuthUserService } from './un-auth-user.service';

describe('UnAuthUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnAuthUserService = TestBed.get(UnAuthUserService);
    expect(service).toBeTruthy();
  });
});
