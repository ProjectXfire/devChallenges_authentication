import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
// Services
import { TokenService } from '@services/token/token.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit, OnDestroy {
  routing$: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.routing$ = this.activatedRoute.queryParamMap.subscribe((params) => {
      const token = params.get('token');
      if (token) {
        this.tokenService.setToken(token);
      } else {
        this.router.navigate(['login']);
      }
    });
  }

  continue() {
    this.router.navigate(['profile']);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.routing$.unsubscribe();
  }
}
