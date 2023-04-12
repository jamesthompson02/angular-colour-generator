import { TestBed } from '@angular/core/testing';

import { RandomRxjsService } from './random-rxjs.service';

describe('RandomRxjsService', () => {
  let service: RandomRxjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomRxjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
