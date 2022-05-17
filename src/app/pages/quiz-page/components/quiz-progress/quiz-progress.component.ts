import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-progress',
  templateUrl: './quiz-progress.component.html',
  styleUrls: ['./quiz-progress.component.scss']
})
export class QuizProgressComponent implements OnInit {
  @Input() data!: any[];
  @Input() active!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
