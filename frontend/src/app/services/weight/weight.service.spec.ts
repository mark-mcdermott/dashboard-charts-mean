import { TestBed, inject } from '@angular/core/testing';

import { WeightService } from './weight.service';

describe('WeightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeightService]
    });
  });

  it('should be created', inject([WeightService], (service: WeightService) => {
    expect(service).toBeTruthy();
  }));
});
