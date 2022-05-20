import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Question } from 'src/app/shared/models/question.model';
import { QuizQuestionComponent } from './quiz-question.component';

const questionMock: Question = {
  id: '1',
  genre: 'jazz',
  data: [],
};

describe('QuizQuestionComponent', () => {
  let component: QuizQuestionComponent;
  let fixture: ComponentFixture<QuizQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizQuestionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuestionComponent);
    component = fixture.componentInstance;
    component.question = questionMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display genre in uppercase', () => {
    const title = fixture.nativeElement.querySelector('.question__title');
    const expectedPipedGenre = questionMock.genre.toUpperCase();
    expect(title.textContent).toEqual(`${expectedPipedGenre} SONG`);
  });
});
