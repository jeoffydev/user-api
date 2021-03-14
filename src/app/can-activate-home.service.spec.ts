import { TestBed } from '@angular/core/testing';

import { CanActivateHomeService } from './can-activate-home.service';

describe('CanActivateHomeService', () => {
  let service: CanActivateHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
