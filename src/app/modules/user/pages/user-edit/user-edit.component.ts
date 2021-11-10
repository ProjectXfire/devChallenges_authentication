import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// Models
import { IUser } from '@models/user';
// Services
import { UserService } from '@services/user/user.service';
import { StoreService } from '@services/store/store.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  user: IUser | null = null;
  defaultAvatar = './assets/images/default.png';
  avatar: string | ArrayBuffer | null = '';
  avatarSize: string = '';

  constructor(
    private formBuilderService: FormBuilder,
    private routerService: Router,
    private userService: UserService,
    private storeService: StoreService
  ) {}

  form = this.formBuilderService.group({
    name: ['', [Validators.required]],
    photo: [''],
    bio: [''],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  getImage(e: Event) {
    this.avatarSize = '';
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;
    const reader = new FileReader();
    if (files[0].size <= 50000) {
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        this.avatar = reader.result;
        this.form.controls.photo.setValue(reader.result);
      };
    } else {
      this.avatarSize = 'The file must not exceed the 50kb';
    }
  }

  submit(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.form.disable();
      this.userService
        .updateUser(this.form.value)
        .pipe(
          catchError((error) => {
            this.form.enable();
            return throwError(error);
          })
        )
        .subscribe(() => {
          this.form.enable();
          this.routerService.navigate(['profile']);
        });
    } else {
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data) => {
      this.form.patchValue(data);
      this.avatar = this.form.value.photo;
      this.storeService.setUserName(data.name, data.photo);
    });
  }
}
