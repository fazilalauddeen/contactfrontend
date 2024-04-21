import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private apiService: ApiService) { }

  signup() {
    const userData = { email: this.username, password: this.password };
    this.apiService.signup(userData).subscribe(
      (response) => {
      
        console.log('Signup successful:', response);
        this.router.navigate(['/auth/login']); 
      },
      (error) => {
        
        console.error('Signup failed:', error);
        this.errorMessage = error; 
      }
    );
  }
}
