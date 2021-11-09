import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
// Models
import { TToken } from '@models/token';
// Services
import { TokenService } from '@services/token/token.service';
import { ErrorsService } from '@services/errors/errors.service';
// Environments
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClientService: HttpClient,
    private tokenService: TokenService,
    private errorsService: ErrorsService
  ) {}

  login(email: string, password: string): Observable<TToken> {
    return this.httpClientService
      .post<TToken>(`${environment.URL_API}/auth/login`, {
        email,
        password,
      })
      .pipe(
        catchError((error) => this.errorsService.handleErrorMessage(error)),
        tap((token) => this.tokenService.setToken(token.access_token))
      );
  }
}
