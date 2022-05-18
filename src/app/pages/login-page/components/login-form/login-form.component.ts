import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../../shared/services/login/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10),]],
  });

  get nameControl() {
    return this.loginForm.get('name');
  }


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loginService.login(this.loginForm.value);
    this.router.navigate(['/quiz']);
  }

}
