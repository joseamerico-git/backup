import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environmants/environmant';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  myAppUrl:string;
  myApiUrl:string;
  myApiUrlCreate:string;
 
 

 constructor(private http: HttpClient) {
   this.myAppUrl = environment.endpoint;
   this.myApiUrl = 'api/produtos/view';
   this.myApiUrlCreate = 'api/produtos/create'



  }

  getProducts():Observable<any>{
    //const token = localStorage.getItem('token');
   // const headers = new HttpHeaders().set('authorization',`Bearer ${token}`)
   // return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`,{headers:headers})
   //const token = localStorage.getItem('token');
  // const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`)
   return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`)
  }

  getAll(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('authorization',`Bearer ${token}`)
    return this.http.get("http://200.98.82.2:3050/api/produtos")
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(product:any):Observable<any> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrlCreate}`,product);
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
