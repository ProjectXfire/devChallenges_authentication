import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private cookieService: CookieService) {}

  setToken(token: string) {
    const getDate: Date = new Date();
    getDate.setMinutes(getDate.getMinutes() + 10);
    this.cookieService.set('token', token, { expires: getDate, path: '/' });
  }
  getToken() {
    return this.cookieService.get('token');
  }
  removeToken() {
    this.cookieService.delete('token');
  }
  existToken(): boolean {
    return this.cookieService.check('token');
  }
}
