import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './presentation/layout/home/home.component';
import { InstantaneousTemperatureComponent } from './presentation/dashboard/instantaneous-temperature/instantaneous-temperature.component';
import { AverageTemperatureComponent } from './presentation/dashboard/average-temperature/average-temperature.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'dashboard/instantaneous-temperature', component: InstantaneousTemperatureComponent},
      { path: 'dashboard/average-temperature', component: AverageTemperatureComponent}

    ]
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
