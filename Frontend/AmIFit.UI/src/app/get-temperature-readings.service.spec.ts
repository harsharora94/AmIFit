import { TestBed } from '@angular/core/testing';

import { GetTemperatureReadingsService } from './get-temperature-readings.service';

describe('GetTemperatureReadingsService', () => {
  let service: GetTemperatureReadingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTemperatureReadingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
