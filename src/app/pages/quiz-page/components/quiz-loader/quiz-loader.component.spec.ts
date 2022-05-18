import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizLoaderComponent } from './quiz-loader.component';

describe('QuizLoaderComponent', () => {
  let component: QuizLoaderComponent;
  let fixture: ComponentFixture<QuizLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
