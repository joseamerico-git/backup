import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environmants/environmant';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  myAppUrl:string;
  myApiUrl:string;
 
 

 constructor(private http: HttpClient) {
   this.myAppUrl = environment.endpoint;
   this.myApiUrl = 'api/produtos';


  }

  getProducts():Observable<Product[]>{
    //const token = localStorage.getItem('token');
   // const headers = new HttpHeaders().set('authorization',`Bearer ${token}`)
   // return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`,{headers:headers})
   //const token = localStorage.getItem('token');
  // const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`)
   return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }
}
