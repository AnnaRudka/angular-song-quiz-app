import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Question } from 'src/app/shared/models/question.model';
import { QuizProgressComponent } from './quiz-progress.component';

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

describe('QuizProgressComponent', () => {
  let component: QuizProgressComponent;
  let fixture: ComponentFixture<QuizProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizProgressComponent);
    component = fixture.componentInstance;
    component.data = questionsMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create list of genres', () => {
    const listItems = fixture.debugElement.queryAll(By.css('.progress-nav__list-item'));
    expect(listItems.length).toEqual(3);
  });

  it('should display genre in uppercase', () => {
    const expectedPipedGenre = questionsMock[0].genre.toUpperCase();
    const listItems = fixture.debugElement.queryAll(By.css('.progress-nav__list-item'));
    const listItem = listItems[0].nativeElement;
    expect(listItem.textContent).toEqual(` ${expectedPipedGenre} `);
  });
});
