import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../create-user/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  user: User = new User();
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'mobile', 'address', 'tags', 'actions'];

  constructor(private _dialog: MatDialog, private router: Router, private _apiService: ApiService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this._apiService.getUsers().subscribe(
      (users: any[]) => {
        this.users = users;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  openAddForm() {
    this.router.navigate(['users/create']);
  }

  editUser(userId: number) {
    this.router.navigate(['users/update', userId]);
  }


  deleteUser(userId: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this._apiService.deleteUser(userId).subscribe(
        () => {
          this.users = this.users.filter(user => user.id !== userId);
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
  }

  

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    sessionStorage.setItem("isLoggedIn", "false");
    this.router.navigate(['/auth/login']);
  }
}
