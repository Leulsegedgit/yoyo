// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAdmin = false;

  constructor() { }

  loginAdmin(): void {
    this.isAdmin = true;
  }

  logoutAdmin(): void {
    this.isAdmin = false;
  }

  isAdminLoggedIn(): boolean {
    return this.isAdmin;
  }
}
