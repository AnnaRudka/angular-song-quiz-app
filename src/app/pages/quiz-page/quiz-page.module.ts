import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { QuizPageComponent } from './quiz-page.component';
import { ButtonModule } from '../../shared/components/button/button.module';
import { LogoModule } from '../../shared/components/logo/logo.module';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizProgressComponent } from './components/quiz-progress/quiz-progress.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { QuizDescriptionComponent } from './components/quiz-description/quiz-description.component';
import { QuizAnswerButtonComponent } from './components/quiz-answer-button/quiz-answer-button.component';


@NgModule({
  declarations: [QuizPageComponent, QuizProgressComponent, QuizQuestionComponent, QuizDescriptionComponent, QuizAnswerButtonComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, LogoModule],
  exports: [QuizPageComponent],
})
export class QuizPageModule {}