import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/shared/services/localStore/local-store.service';
import { ScoreService } from 'src/app/shared/services/score/score.service';

const USER_KEY = 'USER';
const MAX_SCORE = 12;

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss'],
})
export class SummaryPageComponent implements OnInit {
  user = this.localStoreService.loadState(USER_KEY);
  maxScore = MAX_SCORE;
  totalScore = 0;

  constructor(
    public scoreService: ScoreService,
    private router: Router,
    private localStoreService: LocalStoreService
  ) {}

  ngOnInit(): void {
    this.totalScore = this.scoreService.getTotalScore();
  }

  onTryAgainClick() {
    this.scoreService.clearScore();
    this.router.navigate(['/quiz']);
  }
}
