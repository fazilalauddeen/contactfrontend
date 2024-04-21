import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './create-user/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  createUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, userData).pipe(
      catchError((error) => {
        console.error('Error creating user:', error);
        return throwError('Failed to create user');
      })
    );
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError('Failed to fetch users');
      })
    );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`).pipe(
      catchError((error) => {
        console.error('Error fetching user:', error);
        return throwError('Failed to fetch user');
      })
    );
  }

  createuser(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`).pipe(
      catchError((error) => {
        console.error('Error deleting user:', error);
        return throwError('Failed to delete user');
      })
    );
  }

  updateUser(id: number, userData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/users/${id}`, userData).pipe(
      catchError((error) => {
        console.error('Error updating user:', error);
        return throwError('Failed to update user');
      })
    );
  }

  signup(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/signup`, userData).pipe(
      catchError((error) => {
        console.error('Error signing up:', error);
        return throwError('User Already Exists');
      })
    );
  }

  signin(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/signin`, userData).pipe(
      catchError((error) => {
        console.error('Error signing in:', error);
        if (error.status === 404) {
          return throwError('User does not exist');
        } else {
          return throwError('Failed to sign in');
        }
      })
    );
  }

  signout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/signout`, {}).pipe(
      catchError((error) => {
        console.error('Error signing out:', error);
        return throwError('Failed to sign out');
      })
    );
  }

 

  



 

  

  
}
