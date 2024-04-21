import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from './user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  user: User = new User(); 
  
  constructor(private apiService: ApiService, private router: Router) {}

  

  fetchUser(userId: number) {
    this.apiService.getUser(userId).subscribe(
      (user: User) => {
        this.user = user;
      },
      (error: any) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  

  saveUser() {
    this.apiService.createUser(this.user).subscribe(() => {
      console.log('User created successfully');
      this.router.navigate(['dashboard']);
      
    });
  }

  cancel(){
    this.router.navigate(['dashboard']);
  }

  reset() {
    this.user.address = '',
    this.user.firstname = '',
    this.user.email = '',
    this.user.lastname = '',
    this.user.mobile = '',
    this.user.tags = ''
  }
}
