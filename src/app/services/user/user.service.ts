import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
// Models
import {
  IUser,
  ICreateUserDto,
  IUserMessage,
  IUpdateUserDto,
} from '@models/user';
// Services
import { ErrorsService } from '@services/errors/errors.service';
// Environments
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClientService: HttpClient,
    private errorsService: ErrorsService
  ) {}

  getUser(): Observable<IUser> {
    return this.httpClientService
      .get<IUser>(`${environment.URL_API}/user/get`)
      .pipe(
        catchError((error) => this.errorsService.handleErrorMessage(error))
      );
  }

  createUser(user: ICreateUserDto): Observable<IUserMessage> {
    return this.httpClientService
      .post<IUserMessage>(`${environment.URL_API}/user/create`, user)
      .pipe(
        catchError((error) => this.errorsService.handleErrorMessage(error))
      );
  }

  updateUser(user: IUpdateUserDto): Observable<IUserMessage> {
    return this.httpClientService
      .put<IUserMessage>(`${environment.URL_API}/user/update`, user)
      .pipe(
        catchError((error) => this.errorsService.handleErrorMessage(error))
      );
  }
}
