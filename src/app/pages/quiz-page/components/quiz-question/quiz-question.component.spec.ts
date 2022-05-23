import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

  it('should display genre in titlecase', () => {
    const title = fixture.nativeElement.querySelector('.question__title');
    const expectedPipedGenre = questionMock.genre[0].toUpperCase() + questionMock.genre.slice(1);
    expect(title.textContent).toEqual(`${expectedPipedGenre} Song`);
  });

  it('should show text element', () => {
    const text = fixture.nativeElement.querySelector('.question__text');
    expect(text).toBeTruthy();
  });

  it('should show audio player', () => {
    const audio = fixture.nativeElement.querySelector('.question__audio-player');
    expect(audio).toBeTruthy();
  });

  it('should display default block', () => {
    const defaultBLock = fixture.nativeElement.querySelector('.default-block__image');
    expect(defaultBLock).toBeTruthy();
  });

  it('should display default background', () => {
    const defaultBrg = fixture.debugElement.query(By.css('.question__audio-image--default'));

    expect(defaultBrg.nativeElement).toBeTruthy();
  });
});
