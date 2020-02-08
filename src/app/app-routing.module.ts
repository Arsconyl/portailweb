import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './pages/login/login.component';
import { TrombinoscopeComponent } from './pages/trombinoscope/trombinoscope.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FroalaComponent } from './froala/froala.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    children: [],
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'trombinoscope',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    component: TrombinoscopeComponent
  },
  {
    path: 'dashboard',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    component: DashboardComponent
  },
  {
    path: 'HTMLeditor',
    component: FroalaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
