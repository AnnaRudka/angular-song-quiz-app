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
import { QuizAnswerOptionComponent } from './components/quiz-answer-option/quiz-answer-option.component';
import { QuizHeaderComponent } from './components/quiz-header/quiz-header.component';
import { QuizLoaderComponent } from './componenеts/quiz-loader/quiz-loader.component';


@NgModule({
  declarations: [QuizPageComponent, QuizProgressComponent, QuizQuestionComponent, QuizDescriptionComponent, QuizAnswerOptionComponent, QuizHeaderComponent, QuizLoaderComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, LogoModule],
  exports: [QuizPageComponent],
})
export class QuizPageModule {}