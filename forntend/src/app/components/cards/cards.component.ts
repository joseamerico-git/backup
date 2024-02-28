import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {




produtos:any= []
constructor(private _productService: ProductService){
 
}
ngOnInit(): void {
  this.getProducts();
}

getProducts(){
  this._productService.getProducts().subscribe(data=>{
    console.log(data.listProdutos)
    this.produtos = data.listProdutos;

  })
}

}