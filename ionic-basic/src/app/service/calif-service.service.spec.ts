import { TestBed } from '@angular/core/testing';

import { CalifServiceService } from './calif-service.service';

describe('CalifServiceService', () => {
  let service: CalifServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalifServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
