import { HttpInterceptorFn } from '@angular/common/http';

import { catchError, throwError } from 'rxjs';
import { ErrorService } from '../services/error.service';


export const errorInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  let errorInterceptorInterceptor: ErrorService;
  
  return next(req).pipe(catchError((error)=>{
   
  
    
   if([404].includes(error.status)){
     console.log("Not found")
  
     
     // acountService.logout();
   }

       //const e = error.error.message || error.statusText;
    //console.error(error.message)
    return throwError(()=>{
      if(error===401){
        errorInterceptorInterceptor.msgError(error.error.msg)
      }
    });
  }));
};
