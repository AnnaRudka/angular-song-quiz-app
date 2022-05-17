import { Injectable } from '@angular/core';
import { LocalStoreService } from './localStore/local-store.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn = false;

  constructor(private localStoreService: LocalStoreService) {}

  login({ name }: { name: string }) {
    const user = {
      id: 1,
      name,
    };
    this.localStoreService.saveState('USER', user);
  }
}
