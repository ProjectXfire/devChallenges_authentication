import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import defaultPhoto from '@assets/images/default.png';
// Models
import { IUserNavData } from '@models/user';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  // Observables
  private userName = new BehaviorSubject<IUserNavData>({
    name: '',
    photo: '',
  });
  user$ = this.userName.asObservable();
  private token = new BehaviorSubject<string | null>(null);

  setUserName(name: string, photo: string) {
    this.userName.next({
      name,
      photo,
    });
  }
}
