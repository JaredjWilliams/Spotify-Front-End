import { TestBed } from '@angular/core/testing';

import { SportifyService } from './sportify.service';

describe('SportifyService', () => {
  let service: SportifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
