import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// Models
import { IUserNavData } from '@models/user';
// Services
import { StoreService } from '@services/store/store.service';
import { TokenService } from '@services/token/token.service';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$: Observable<IUserNavData>;

  constructor(
    private storeService: StoreService,
    private tokenService: TokenService,
    private routerService: Router,
    private authService: AuthService
  ) {
    this.user$ = this.storeService.user$;
  }

  defaultAvatar = './assets/images/default.png';

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {}
}
