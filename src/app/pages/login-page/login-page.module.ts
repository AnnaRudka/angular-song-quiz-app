import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LoginPageComponent } from './login-page.component';
import { ButtonModule } from '../../shared/components/button/button.module';
import { LogoModule } from '../../shared/components/logo/logo.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, LogoModule],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
