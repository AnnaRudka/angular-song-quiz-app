import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { QuizPageComponent } from './quiz-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';

const questionsMock: Question[] = [
  {
    id: '1',
    genre: 'jazz',
    data: [],
  },
  {
    id: '2',
    genre: 'rock',
    data: [],
  },
];

describe('QuizPageComponent', () => {
  let component: QuizPageComponent;
  let fixture: ComponentFixture<QuizPageComponent>;

  const elements = {
    getHeader: () =>
      fixture.debugElement.query(By.css('[data-role="app-quiz-header"]')),
    getFooter: () => fixture.debugElement.query(By.css('footer')),
    getProgress: () =>
      fixture.debugElement.query(By.css('[data-role="app-quiz-progress"]')),
    getQuestion: () =>
      fixture.debugElement.query(By.css('[data-role="app-quiz-question"]')),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizPageComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPageComponent);
    component = fixture.componentInstance;
    component.data = questionsMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header, progress, question and footer', () => {
    expect(elements.getQuestion()).toBeTruthy();
    expect(elements.getProgress()).toBeTruthy();
    expect(elements.getFooter()).toBeTruthy();
    expect(elements.getHeader()).toBeTruthy();
  });
});
