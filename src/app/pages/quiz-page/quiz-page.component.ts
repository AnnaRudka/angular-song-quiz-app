import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';
import { ScoreService } from 'src/app/shared/services/score.service';
import data from '../../shared/mock/data.json';
import { LocalStoreService } from 'src/app/shared/services/localStore/local-store.service';
import { QuestionService } from 'src/app/shared/services/questions/question.service';
import { Observable } from 'rxjs';

const USER_KEY = 'USER';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent implements OnInit {
  user = this.localStoreService.loadState(USER_KEY);
  data: Question[] = [];
  activeIndex: number = 0;
  activeQuestion: Question = {
    id: '',
    genre: '',
    data: []
  };
  disabled: boolean = true;

  constructor(
    public scoreService: ScoreService,
    private localStoreService: LocalStoreService,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((data) => {
      this.data = data;
      this.activeQuestion = this.data[this.activeIndex];
    });
  }

  onNextClick() {
    this.activeIndex += 1;
    this.activeQuestion = this.data[this.activeIndex];
  }
}
