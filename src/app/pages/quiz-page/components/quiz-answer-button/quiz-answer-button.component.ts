import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer } from 'src/app/shared/models/answer.model';

@Component({
  selector: 'app-quiz-answer-button',
  templateUrl: './quiz-answer-button.component.html',
  styleUrls: ['./quiz-answer-button.component.scss']
})
export class QuizAnswerButtonComponent implements OnInit {
  @Input() i:number = 0;
  @Input() answer!: Answer;
  @Input() status!: string;
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onAswerClick() {
    this.onClick.emit();
  }
}
