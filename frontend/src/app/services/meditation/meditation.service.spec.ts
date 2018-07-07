import { TestBed, inject } from '@angular/core/testing';

import { MeditationService } from './meditation.service';

describe('MeditationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeditationService]
    });
  });

  it('should be created', inject([MeditationService], (service: MeditationService) => {
    expect(service).toBeTruthy();
  }));
});
