import { TestBed } from '@angular/core/testing';

import { MainAppComponentService } from './main-app-component.service';

describe('MainAppComponentService', () => {
  let service: MainAppComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainAppComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
