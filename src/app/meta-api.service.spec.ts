import { TestBed } from '@angular/core/testing';

import { MetaApiService } from './meta-api.service';

describe('MetaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetaApiService = TestBed.get(MetaApiService);
    expect(service).toBeTruthy();
  });
});
