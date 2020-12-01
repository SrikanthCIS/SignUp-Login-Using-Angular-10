import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { SignUpComponent } from './sign-up';
import { AuthGuard } from './_helper/auth.guard';

const routes: Routes = [
  { path:'', redirectTo:'signUp', pathMatch:'full'},
  { path: 'signUp', component: SignUpComponent },
  { path: 'login', component: LoginComponent},
  { path:'home', component: HomeComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
