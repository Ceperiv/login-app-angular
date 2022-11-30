import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {CarsComponent} from "./components/cars/cars.component";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'cars', component: CarsComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
