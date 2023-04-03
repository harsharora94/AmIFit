import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SplashScreenComponent } from './splashscreen/splash-screen/splash-screen.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/splash', pathMatch: 'full' 
  },
  {
    path:'splash',
    component: SplashScreenComponent
  },
  {
    path:'login',
    component: LoginPageComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
