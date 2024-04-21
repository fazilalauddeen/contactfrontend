import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private apiService: ApiService) { }

  login() {
    const userData = { email: this.username, password: this.password };
    this.apiService.signin(userData).subscribe(
      (response) => {
        console.log('Login successful:', response);
        localStorage.setItem('token', response.accessToken); 
        sessionStorage.setItem("isLoggedIn", "true")
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Login failed:', error);
        sessionStorage.setItem("isLoggedIn", "false")
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message; 
        } else {
          this.errorMessage = 'Wrong Credentials'; 
        }
      }
    );
  }
}
