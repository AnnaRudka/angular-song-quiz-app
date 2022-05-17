import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAnswerButtonComponent } from './quiz-answer-button.component';

describe('QuizAnswerButtonComponent', () => {
  let component: QuizAnswerButtonComponent;
  let fixture: ComponentFixture<QuizAnswerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAnswerButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAnswerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
