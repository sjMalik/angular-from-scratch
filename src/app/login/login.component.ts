import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      // Implement your login logic here (e.g., call an authentication service)
      const username = form.value.username;
      const password = form.value.password;

      // Example: Display submitted values
      console.log('Username:', username);
      console.log('Password:', password);

      // Further actions: API calls, authentication checks, etc.
    }
  }
}

