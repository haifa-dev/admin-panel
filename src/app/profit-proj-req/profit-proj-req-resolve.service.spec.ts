import { TestBed } from '@angular/core/testing';

import { ProfitProjReqResolveService } from './profit-proj-req-resolve.service';

describe('ProfitProjReqResolveService', () => {
  let service: ProfitProjReqResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfitProjReqResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
