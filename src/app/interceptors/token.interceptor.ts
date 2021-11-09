import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
// Services
import { TokenService } from '@services/token/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = this.addTokenToRequest(request);
    return next.handle(request);
  }

  private addTokenToRequest(request: HttpRequest<unknown>) {
    const existToken = this.tokenService.existToken();
    if (existToken) {
      const token = this.tokenService.getToken();
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
      return authRequest;
    }
    return request;
  }
}
