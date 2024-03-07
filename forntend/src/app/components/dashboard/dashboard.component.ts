import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../../services/product.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { addTokenInterceptor } from '../../utils/add-token.interceptor';
import { Product } from '../../interfaces/produto';
import { CommonModule, NgFor } from '@angular/common';
import { CardsComponent } from '../cards/cards.component';
import { CadastroProdutosComponent } from '../cadastro-produtos/cadastro-produtos.component';
import { FileUploadComponent } from '../file-upload-components/file-upload-components.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,CommonModule,NgFor,CardsComponent,CadastroProdutosComponent,FileUploadComponent],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  produtos:any= []
  constructor(){
   
  }
  ngOnInit(): void {
  
  
  }

  
}
