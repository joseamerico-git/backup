import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr:ToastrService) { }

  msgError(e: HttpErrorResponse) {
    if (e.error.message) {
      this.toastr.error(e.error.msg, 'Error');
      console.log(e)
      
      
    } else {
      this.toastr.error("Ops! ocorreu um erro comunique-se como o administrador!", 'Error');
    }
  }
}
