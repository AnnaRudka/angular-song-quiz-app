import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAnswerOptionComponent } from './quiz-answer-option.component';

describe('QuizAnswerButtonComponent', () => {
  let component: QuizAnswerOptionComponent;
  let fixture: ComponentFixture<QuizAnswerOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAnswerOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAnswerOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
