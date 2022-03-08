import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './application-components/home-page/home-page.component';
import { TaskListComponent } from './application-components/task-list/task-list.component';
import { UserProfileComponent } from './application-components/user-profile/user-profile.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { SignupComponent } from './core/authentication/signup/signup.component';
import { AuthenticationGuardGuard } from './_helpers/authentication-guard.guard';

const routes: Routes = [

  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthenticationGuardGuard] },
  { path: 'taskList', component: TaskListComponent, canActivate: [AuthenticationGuardGuard] },

  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
