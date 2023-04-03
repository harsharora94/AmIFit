import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './app/splashscreen/splash-screen/splash-screen.component';
import { LoginPageComponent } from './app/login/login-page/login-page.component';
import { DashboardComponent } from './app/dashboard/dashboard/dashboard.component';

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
