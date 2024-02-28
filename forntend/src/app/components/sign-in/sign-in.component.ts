import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { ErrorService } from '../../services/error.service';



@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink,
    FormsModule, ToastrModule, HttpClientModule, SpinnerComponent, CommonModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService, private _userSerice: UserService, private router: Router,private _errorServicce:ErrorService) {

  }


  ngOnInit(): void {

  }

  addUser(): void {
    // Validar se o usuário adicionou valores nos campos

    if (this.username == '' || this.password == '' || this.confirmPassword == '') {
      this.toastr.error("Todos os campos devem ser preenchidos", "Error")
      return;
    }

    // Validar se as passwords são iguais

    if (this.password != this.confirmPassword) {
      this.toastr.error("As senhas não estão iguais!")
      return;
    }

    //Criamos o objeto 

    const user: User = {
      username: this.username,
      password: this.password
    }
    this.loading = true;

    this._userSerice.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`Usuário ${user.username} registrado com sucesso!","Usuário registrado!`);
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {

        this.loading = false;
        this._errorServicce.msgError(e);
       
      },
      complete: () => console.info('complete')
    })
  }
 



}
