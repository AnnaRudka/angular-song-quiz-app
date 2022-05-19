import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';
import { QuestionService } from 'src/app/shared/services/questions/question.service';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/shared/services/score/score.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent implements OnInit {
  data: Question[] = [];
  activeIndex: number = 0;
  activeQuestion: Question = {
    id: '',
    genre: '',
    data: [],
  };
  disabled: boolean = true;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string>;

  constructor(
    public scoreService: ScoreService,
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.questionService.isLoading$;
    this.error$ = this.questionService.error$;
    this.questionService.getQuestions().subscribe((data) => {
      this.data = data;
      this.activeQuestion = this.data[this.activeIndex];
    });
  }

  onNextClick() {
    this.activeIndex += 1;
    this.activeQuestion = this.data[this.activeIndex];
  }

  onScoreClick() {
    this.router.navigate(['/summary']);
  }
}
