import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// Environments
import { environment } from '@environments/environment';
// Services
import { AuthService } from '@services/auth/auth.service';
import { ErrorsService } from '@services/errors/errors.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  errorMessage$: Observable<string>;

  api_url: string = '';

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authService: AuthService,
    private errorService: ErrorsService
  ) {
    this.errorMessage$ = this.errorService.messageError$;
    this.api_url = environment.URL_API;
  }

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.authService
        .login(this.form.value.email, this.form.value.password)
        .subscribe(() => {
          this.form.reset();
          this.route.navigate(['profile']);
        });
    } else {
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.errorService.clearErrorMessage();
  }
}
