import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ErrorsService {
  constructor() {}

  // Observables
  private messageError = new BehaviorSubject<string>('');
  messageError$ = this.messageError.asObservable();

  handleErrorMessage = (error: HttpErrorResponse) => {
    if (error.status !== 0) {
      if (error.status === HttpStatusCode.InternalServerError) {
        const duplicateKey = error.error.message
          .split(' ')
          .some((text: string) => text === 'E11000');
        if (duplicateKey) {
          this.messageError.next('The email is already registered');
          return throwError('The email is already register');
        } else {
          this.messageError.next(error.error.message);
          return throwError(error.error.message);
        }
      }
      if (error.status === HttpStatusCode.NotFound) {
        this.messageError.next('Not found');
        return throwError('Not found');
      }
      if (error.status === HttpStatusCode.Unauthorized) {
        this.messageError.next(error.error.message);
        return throwError(error.error.message);
      }
    }
    this.messageError.next('Connection error, please try later');
    return throwError('Connection error, please try later');
  };

  clearErrorMessage() {
    this.messageError.next('');
  }
}
