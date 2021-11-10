import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// Models
import { IUser } from '@models/user';
// Services
import { UserService } from '@services/user/user.service';
import { StoreService } from '@services/store/store.service';
import { TokenService } from '@services/token/token.service';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private storeService: StoreService,
    private tokenService: TokenService,
    private authService: AuthService
  ) {}

  user: IUser | null = null;
  defaultAvatar = './assets/images/default.png';

  ngOnInit(): void {
    this.userService.getUser().subscribe((data) => {
      this.user = data;
      this.storeService.setUserName(data.name, data.photo);
    });
  }
}
