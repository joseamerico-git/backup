import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environmants/environmant';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {
  myApiUrl: string = ''
  myAppUrl: string = ''


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/categorias';

  }


  getCategorias() {
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`)
  }


}
