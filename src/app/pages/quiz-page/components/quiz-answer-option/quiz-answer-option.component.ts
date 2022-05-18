import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-answer-option',
  templateUrl: './quiz-answer-option.component.html',
  styleUrls: ['./quiz-answer-option.component.scss'],
})
export class QuizAnswerOptionComponent implements OnInit {
  @Input() status!: string;

  constructor() {}

  ngOnInit(): void {}
}
