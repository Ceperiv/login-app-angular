import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CarComponent} from './components/car/car.component';
import {CarsComponent} from './components/cars/cars.component';
import {LoginComponent} from './components/login/login.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {RegisterComponent} from './components/register/register.component';
import {HeaderComponent} from './components/header/header.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRoutingModule} from "./app-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterComponent,
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
