import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplashScreenComponent } from './app/splashscreen/splash-screen/splash-screen.component';
import { LoginPageComponent } from './app/login/login-page/login-page.component';
import { DashboardComponent } from './app/dashboard/dashboard/dashboard.component';
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
