import { TestBed } from '@angular/core/testing';

import { MatchSocketService } from './match-socket.service';

describe('MatchSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchSocketService = TestBed.get(MatchSocketService);
    expect(service).toBeTruthy();
  });
});
