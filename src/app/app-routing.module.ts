import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { AuthGuard } from './shared/services/authGuard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: "full"},
  { path: 'login', component: LoginPageComponent },
  {
    path: 'quiz',
    component: QuizPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'summary',
    component: SummaryPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
