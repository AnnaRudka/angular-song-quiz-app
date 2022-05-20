import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Answer } from 'src/app/shared/models/answer.model';

import { QuizDescriptionComponent } from './quiz-description.component';

const answerMock: Answer = {
  name: 'name',
  id: '1-1',
  description: 'description',
  image: '',
  audio: '',
  songTitle: 'songTitle',
};
describe('QuizDescriptionComponent', () => {
  let component: QuizDescriptionComponent;
  let fixture: ComponentFixture<QuizDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizDescriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDescriptionComponent);
    component = fixture.componentInstance;
    component.answer = answerMock;
    component.index = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show description', () => {
    const description = fixture.nativeElement.querySelector('.description__text');
    expect(description.textContent).toEqual(answerMock.description);
  });

  it('should show title', () => {
    const title = fixture.nativeElement.querySelector('.description__title');
    expect(title.textContent).toEqual(` 01: ${ answerMock.name } - ${ answerMock.songTitle } `);
    expect(title.textContent).toContain(answerMock.name);
  });
});
