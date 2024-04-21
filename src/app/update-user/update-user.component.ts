import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  userId: number;
  user: any;
  originalUser: any;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) {
    this.userId = +this.route.snapshot.params['id'];
    this.apiService.getUser(this.userId).subscribe(
      (user: any) => {
        this.user = user;
        this.originalUser = { ...user }; 
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  updateUser() {
    this.apiService.updateUser(this.userId, this.user).subscribe(
      () => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  cancel(){
    this.router.navigate(['/dashboard']);
  }

  resetForm() {
    this.user = { ...this.originalUser };
  }
}
