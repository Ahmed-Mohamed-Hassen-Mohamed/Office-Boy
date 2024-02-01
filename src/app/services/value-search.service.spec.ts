import { TestBed } from '@angular/core/testing';

import { ValueSearchService } from './value-search.service';

describe('ValueSearchService', () => {
  let service: ValueSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
