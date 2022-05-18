import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from 'src/app/shared/services/localStore/local-store.service';
import { ScoreService } from 'src/app/shared/services/score/score.service';

const USER_KEY = 'USER';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrls: ['./quiz-header.component.scss'],
})
export class QuizHeaderComponent implements OnInit {
  user = this.localStoreService.loadState(USER_KEY);

  constructor(
    public scoreService: ScoreService,
    private localStoreService: LocalStoreService
  ) {}

  ngOnInit(): void {}
}
