import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/shared/models/answer.model';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-quiz-description',
  templateUrl: './quiz-description.component.html',
  styleUrls: ['./quiz-description.component.scss'],
})
export class QuizDescriptionComponent implements OnInit {
  @Input() answer!: Answer;
  @Input() index!: number;
  apiUrl = API_URL;

  constructor() {}

  ngOnInit(): void {}
}
