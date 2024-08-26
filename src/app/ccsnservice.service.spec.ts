import { TestBed } from '@angular/core/testing';

import { CcsnserviceService } from './ccsnservice.service';

describe('CcsnserviceService', () => {
  let service: CcsnserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcsnserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
