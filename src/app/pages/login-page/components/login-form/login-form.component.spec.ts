import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render input elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const nameInput = compiled.querySelector('input[id="name"]');
  
    expect(nameInput).toBeTruthy();
  });

  it('should test form validity', () => {
    const form = component.loginForm;
    expect(form.valid).toBeFalsy();
  
    const nameInput = form.controls['name'];
    nameInput.setValue('Anna');
  
    expect(form.valid).toBeTruthy();
  })

  it('should test input errors', () => {
    const form = component.loginForm;
    const nameInput = form.controls['name'];
    expect(nameInput?.errors?.['required']).toBeTruthy();
  
    nameInput.setValue('Anna');
    expect(nameInput.errors).toBeNull();
  });
});
