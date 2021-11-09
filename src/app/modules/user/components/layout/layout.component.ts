import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// Models
import { IUserNavData } from '@models/user';
// Services
import { StoreService } from '@services/store/store.service';
import { TokenService } from '@services/token/token.service';

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
    private routerService: Router
  ) {
    this.user$ = this.storeService.user$;
  }

  defaultAvatar = './assets/images/default.png';

  logout() {
    this.tokenService.removeToken();
    this.routerService.navigate(['login']);
  }

  ngOnInit(): void {}
}
