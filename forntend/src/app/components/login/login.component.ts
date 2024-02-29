import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { SpinnerComponent } from "../../shared/spinner/spinner.component";
import { ErrorService } from '../../services/error.service';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [RouterLink, FormsModule, SpinnerComponent,CommonModule,HttpClientModule]
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loading:boolean = false;
 

  constructor(private toastr: ToastrService, private _userSerice: UserService, private router: Router,private _errorService: ErrorService) {

  }

  ngOnInit(): void {

  }

  login() {
    localStorage.clear();
    //Validamos se usuário iforma dados
    if (this.username == '' || this.password == '') {
      this.toastr.error("Todos os campos são obrigatórios!", 'Error')
    }

    //Criamos o bory

    const user: User = {
      username: this.username,
      password: this.password
    }
    this.loading = true;
    this._userSerice.login(user).subscribe({
      next: (data) => {
        localStorage.setItem('token', data)
        this.msgSucess();
        this.router.navigate(['/dashboard']);

      },

      error: (e: HttpErrorResponse) => {
        
        this._errorService.msgError(e);
        this.loading = false;
        
       
      },
      complete: () => console.info('complete')
    })
  }


  msgSucess(): void {
    this.toastr.success("Login efetuado com sucesso!", `Bem vindo! ${this.username}`)

  }
}
