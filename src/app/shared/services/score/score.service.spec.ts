import { TestBed } from '@angular/core/testing';

import { ScoreService } from './score.service';

describe('ScoreService', () => {
  let service: ScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set score', () => {
    service.setScore(3);
    expect(service.getScore(0)).toEqual(3);
  });

  it('should return total score', () => {
    service.setScore(3);
    service.setScore(3);
    expect(service.getTotalScore()).toEqual(6);
  });

  it('should clear total score', () => {
    service.setScore(3);
    service.clearScore();
    expect(service.getTotalScore()).toEqual(0);
  });
});
