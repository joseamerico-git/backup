import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { RecuperarSenhaComponent } from './components/recuperar-senha/recuperar-senha.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'forntend';

   // http = inject(HttpClient);
 //constructor(){
  //this.http.get('http://localhost:4200/produtos').subscribe((res)=>{
  //  console.log(res)
 // })
 //}
  
}
