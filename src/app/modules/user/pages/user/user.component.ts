import { Component, OnInit } from '@angular/core';
// Models
import { IUser } from '@models/user';
// Services
import { UserService } from '@services/user/user.service';
import { StoreService } from '@services/store/store.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private storeService: StoreService
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
