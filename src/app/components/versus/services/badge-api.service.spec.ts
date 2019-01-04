import { TestBed } from '@angular/core/testing';

import { BadgeApiService } from './badge-api.service';

describe('BadgeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BadgeApiService = TestBed.get(BadgeApiService);
    expect(service).toBeTruthy();
  });
});
