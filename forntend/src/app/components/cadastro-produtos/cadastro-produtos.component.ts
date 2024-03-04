import { Component, ElementRef, Input, OnInit, ViewChild, input } from '@angular/core';
import { FileUploadComponent } from '../file-upload-components/file-upload-components.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-produtos',
  standalone: true,
  imports: [FileUploadComponent,FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent implements OnInit {

  product:any;
  @Input() nome:string = '';

  @Input() estoque:number = 0;
  @ViewChild("cpf", {static: true}) cpf: ElementRef | undefined;

   // propriedade que liga o html ao ts

  cadastrar() {
    console.log(this.cpf)  // valor inserido no input
  }
 
  ngOnInit(): void {
  
    this.product = {
      nome:this.nome,
      cpf:this.cpf,
      estoque:this.estoque
    }
  }
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });
    
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
  }
  


  

}
