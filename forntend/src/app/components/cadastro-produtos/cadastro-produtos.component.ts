import { Component, ElementRef, Input, OnInit, ViewChild, input } from '@angular/core';
import { FileUploadComponent } from '../file-upload-components/file-upload-components.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../interfaces/produto';

@Component({
  selector: 'app-cadastro-produtos',
  standalone: true,
  imports: [FileUploadComponent,FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent implements OnInit {
  nome:string ='';
  descricao:string='';
  estoque:number =0;
  prod:Product | undefined;

  constructor(private _produtoServer: ProductService, private toastr: ToastrService){

  }

  product:any;
 

   // propriedade que liga o html ao ts

  cadastrar() {
  
    console.log(this.form.value);
    const p:any = this.form.value
    console.log("*******")
    console.log(p.nome)
    p.image = "../../../assets/img/no-image.jpg";
    
   

    this._produtoServer.create(p).subscribe(response=>{
      this.toastr.success(response.msg)
      this.form.reset;
         
    })
  }
 
 
  ngOnInit(): void {
  
  
  }
  form = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descricao: new FormControl('', [Validators.required, Validators.minLength(3)]),
    estoque: new FormControl('', [Validators.required, Validators.minLength(3)]),
    

   // name: new FormControl('', [Validators.required, Validators.minLength(3)]),
   // email: new FormControl('', [Validators.required, Validators.email]),
    //body: new FormControl('', Validators.required)
  });
    
  get f(){
    return this.form.controls;
  }
    
  submit(){
      
      this.cadastrar();

  }
  


  

}
