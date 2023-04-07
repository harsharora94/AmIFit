import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AppHeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SplashScreenComponent } from './splashscreen/splash-screen/splash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LoginPageComponent,
    SplashScreenComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
