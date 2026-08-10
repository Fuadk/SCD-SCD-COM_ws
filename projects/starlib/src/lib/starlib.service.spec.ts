import { TestBed } from '@angular/core/testing';

import { StarlibService } from './starlib.service';

describe('StarlibService', () => {
  let service: StarlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
