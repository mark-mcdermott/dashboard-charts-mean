import { TestBed, inject } from '@angular/core/testing';

import { BloodpressureService } from './bloodpressure.service';

describe('BloodpressureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BloodpressureService]
    });
  });

  it('should be created', inject([BloodpressureServiceService], (service: BloodpressureServiceService) => {
    expect(service).toBeTruthy();
  }));
});
