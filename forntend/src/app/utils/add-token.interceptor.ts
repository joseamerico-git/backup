import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable } from '@angular/core';


export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {

   // const headers = new HttpHeaders().set('authorization',`Bearer ${token}`)
   // return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`,{headers:headers})
   let token = localStorage.getItem('token')
    
     let authReq = req.clone({
      headers: req.headers.set('Authorization',`Bearer ${token}`)
     
    })
   
   
  return next(authReq);
};
