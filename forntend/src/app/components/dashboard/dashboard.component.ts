import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../../services/product.service';
<<<<<<< HEAD
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { addTokenInterceptor } from '../../utils/add-token.interceptor';
import { Product } from '../../interfaces/produto';
import { CommonModule, NgFor } from '@angular/common';
import { CardsComponent } from '../cards/cards.component';
import { CadastroProdutosComponent } from '../cadastro-produtos/cadastro-produtos.component';
=======

import { Product } from '../../interfaces/produto';
import { CommonModule, NgFor, NgIf } from '@angular/common';
>>>>>>> 1aa6c24bfd668a01da9633c70c288707ff90884d

@Component({
  selector: 'app-dashboard',
  standalone: true,
<<<<<<< HEAD
  imports: [NavbarComponent,CommonModule,NgFor,CardsComponent,CadastroProdutosComponent],
=======
  imports: [NavbarComponent,CommonModule,NgFor,NgIf],
  
  
>>>>>>> 1aa6c24bfd668a01da9633c70c288707ff90884d

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
<<<<<<< HEAD
  produtos:any= []
  constructor(private _productService: ProductService){
   
=======
   
  listProdutos:any[]=[];
 
  constructor(private _productService: ProductService){
   

>>>>>>> 1aa6c24bfd668a01da9633c70c288707ff90884d
  }
  ngOnInit(): void {
  this.getProducts()
  
  }

<<<<<<< HEAD
  getProducts(){
    this._productService.getProducts().subscribe(data=>{
      console.log(data.listProdutos)
      this.produtos = data.listProdutos;

=======
 

  getProducts():void{
    this._productService.getAll().subscribe(data=>{
      
      console.log(data)
    
      
      this.listProdutos = data;
      
>>>>>>> 1aa6c24bfd668a01da9633c70c288707ff90884d
    })

    

    
  }
}
