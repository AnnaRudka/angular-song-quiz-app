import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';
import { ScoreService } from 'src/app/shared/services/score/score.service';

@Component({
  selector: 'app-quiz-progress',
  templateUrl: './quiz-progress.component.html',
  styleUrls: ['./quiz-progress.component.scss'],
})
export class QuizProgressComponent implements OnInit {
  @Input() data!: Question[];
  @Input() active!: number;

  constructor(public scoreService: ScoreService) {}

  ngOnInit(): void {}
}
