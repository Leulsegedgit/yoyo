// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    // Simple check for demo purposes
    if (this.username === 'admin' && this.password === 'password') {
      this.authService.loginAdmin();
      this.router.navigate(['/submissions']);
    } else {
      alert('Invalid credentials');
    }
  }
}
