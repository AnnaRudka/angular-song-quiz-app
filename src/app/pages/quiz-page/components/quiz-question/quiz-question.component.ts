import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Answer } from 'src/app/shared/models/answer.model';
import { Question } from 'src/app/shared/models/question.model';
import { ScoreService } from 'src/app/shared/services/score/score.service';
import { API_URL } from 'src/app/constants';

const OPTIONS_COUNT = 4;

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss'],
})
export class QuizQuestionComponent implements OnInit, OnChanges {
  @Input() question!: Question;
  apiUrl = API_URL;
  correctIndex!: number;
  correctAnswer: Answer = {
    id: '',
    name: '',
    songTitle: '',
    image: '',
    audio: '',
    description: '',
  };
  isSuccess!: boolean;
  status: any = {};
  clickedIndex!: number;

  constructor(private scoreService: ScoreService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      !!this.question.data.length &&
      changes['question'].currentValue !== changes['question'].previousValue
    ) {
      this.clickedIndex = -1;
      this.status = {};
      this.correctIndex = Math.floor(Math.random() * OPTIONS_COUNT);
      this.correctAnswer = this.question.data[this.correctIndex];
      this.isSuccess = false;
    }
  }

  ngOnInit(): void {}

  onAswerClick(answer: Answer, index: number) {
    this.clickedIndex = index;
    if (answer.id === this.correctAnswer.id) {
      this.status[answer.id] = 'correct';
      this.isSuccess = true;
      this.scoreService.setScore(
        OPTIONS_COUNT - Object.keys(this.status).length
      );
    } else if (!this.isSuccess) {
      this.status[answer.id] = 'incorrect';
    }
  }
}
