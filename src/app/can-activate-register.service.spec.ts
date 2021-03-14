import { TestBed } from '@angular/core/testing';

import { CanActivateRegisterService } from './can-activate-register.service';

describe('CanActivateRegisterService', () => {
  let service: CanActivateRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
