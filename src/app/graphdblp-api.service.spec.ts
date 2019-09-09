import { TestBed } from '@angular/core/testing';

import { GraphdblpApiService } from './graphdblp-api.service';

describe('GraphdblpApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphdblpApiService = TestBed.get(GraphdblpApiService);
    expect(service).toBeTruthy();
  });
});
