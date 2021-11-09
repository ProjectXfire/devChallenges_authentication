import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
// Providers
import { MatSnackBar } from '@angular/material/snack-bar';
// Services
import { UserService } from '@services/user/user.service';
import { ErrorsService } from '@services/errors/errors.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  disabled: boolean = false;
  errorMessage$: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private userService: UserService,
    private errorsService: ErrorsService,
    private _snackBar: MatSnackBar
  ) {
    this.errorMessage$ = this.errorsService.messageError$;
  }

  form = this.fb.group({
    name: ['', [Validators.required]],
    photo: [''],
    bio: [''],
    phone: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 3000,
    });
  }

  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.form.disable();
      this.disabled = true;
      this.userService
        .createUser(this.form.value)
        .pipe(
          catchError((error) => {
            this.form.enable();
            this.disabled = false;
            return throwError(error);
          })
        )
        .subscribe(() => {
          this.form.enable();
          this.form.reset();
          this.disabled = false;
          this.openSnackBar();
          this.route.navigate(['login']);
        });
    } else {
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.errorsService.clearErrorMessage();
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: '<span class="example-pizza-party">User registered 😉</span>',
  styles: [
    `
      .example-pizza-party {
        color: #1e88e5;
      }
    `,
  ],
})
export class PizzaPartyComponent {}
