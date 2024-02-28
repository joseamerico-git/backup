import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token')
  const router = inject(Router);
 
 
  if(token ==undefined){
    console.log("Não existe token válido!")
    router.navigate(['/login']);
  }

  
  return true;
};
