import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecuperarSenhaComponent } from './components/recuperar-senha/recuperar-senha.component';
import { authGuard } from './utils/auth.guard';
import { CardsComponent } from './components/cards/cards.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'signIn',component:SignInComponent},
    {path:'card-produtos',component:CardsComponent},
    {path:'dashboard',component:DashboardComponent, canActivate:[authGuard]},
    {path:'recuperarSenha',component:RecuperarSenhaComponent},
    {path:'**',redirectTo:'login',pathMatch:'full'}
];
