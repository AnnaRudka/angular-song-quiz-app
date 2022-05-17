import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


// Components
import { AppComponent } from './app.component';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { QuizPageModule } from './pages/quiz-page/quiz-page.module';
import { SummaryPageModule } from './pages/summary-page/summary-page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    QuizPageModule,
    SummaryPageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
