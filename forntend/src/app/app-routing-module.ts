import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'sigIn',component:SignInComponent},
    {path:'**',redirectTo:'login',pathMatch:'full'}
];
@NgModule({
    imports:[RouterModule.forRoot(routes),BrowserModule,HttpClientModule,FormsModule],
    exports:[RouterModule]
}) 
export class AppRoutingModule{}