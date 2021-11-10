import { Component, OnInit } from '@angular/core';
// Services
import { StoreService } from '@services/store/store.service';
import { TokenService } from '@services/token/token.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
