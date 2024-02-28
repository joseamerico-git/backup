import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [RouterLink,
    FormsModule, ToastrModule],
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.css'
})
export class RecuperarSenhaComponent implements OnInit {
  email:string = '';
   emailConfirm:string = '';
 
  constructor(private toastr: ToastrService){

  }

  ngOnInit(): void {
    
  }

  enviarEmail():void{
    //Verificar se os emails são iguais
    if(this.email!= this.emailConfirm){
      this.toastr.error("Os emails informados não estão conferem!")
    }else{
      this.toastr.success(`Enviando email para ${this.email}! `)
    }
   
  }
}