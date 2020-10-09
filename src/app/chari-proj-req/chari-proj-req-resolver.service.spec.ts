import { TestBed } from '@angular/core/testing';

import { ChariProjReqResolverService } from './chari-proj-req-resolver.service';

describe('ChariProjReqResolverService', () => {
  let service: ChariProjReqResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChariProjReqResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
