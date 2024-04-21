import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { SignupComponent } from './signup/signup.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component: StartComponent },
  {path: 'auth/signup', component: SignupComponent },
  { path: 'auth/login', component: LoginComponent, },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'users/create', component: CreateUserComponent, canActivate: [AuthGuard]},
  { path: 'users/update/:id', component: UpdateUserComponent, canActivate:[AuthGuard] },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
