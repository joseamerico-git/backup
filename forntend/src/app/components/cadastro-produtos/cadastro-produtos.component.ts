import { Component, ElementRef, Input, OnInit, ViewChild, input } from '@angular/core';
import { FileUploadComponent } from '../file-upload-components/file-upload-components.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../interfaces/produto';
import { CategoriaServiceService } from '../../services/categoria.service.service';
import { Categoria } from '../../interfaces/categoria';

@Component({
  selector: 'app-cadastro-produtos',
  standalone: true,
  imports: [FileUploadComponent,FormsModule, ReactiveFormsModule,CommonModule,NgFor],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent implements OnInit {
  listCategorias:Categoria[] | undefined;
  categoria:Categoria | undefined;
  selectedCat:Categoria | undefined;
  nome:string ='';
  descricao:string='';
  estoque:number =0;
  prod:Product | undefined;
  URL_IMAGE:string='../../../assets/img/';
  NAME_IMAGE:string = 'no-image.jpg'
  product:any;

  constructor(private _produtoServer: ProductService, private _categoriaService: CategoriaServiceService,private toastr: ToastrService){

  }

  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
    console.log("FileUpload -> files", fileList);
    if(fileList[0]!=null)
    this.NAME_IMAGE = `${fileList[0].name}`
   
    } 




  }
  onChange($event:any) {
    this.selectedCat = $event.target.value;
    console.log(this.selectedCat);
    // I want to do something here with the new selectedDevice, but what I
    // get here is always the last selection, not the one I just selected.
}

   // propriedade que liga o html ao ts

  cadastrar() {
  
    console.log(this.form.value);
    const p:any = this.form.value
    p.image = this.URL_IMAGE = `${this.URL_IMAGE}${this.NAME_IMAGE}`;;
        
   

    this._produtoServer.create(p).subscribe(response=>{
      this.toastr.success(response.msg)
      this.form.reset;
         
    })
  }
 
 
  ngOnInit(): void {
    
    
    this.getCategorias();
  
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

  getCategorias(){
    this._categoriaService.getCategorias().subscribe(data=>{
      console.log(data.listCategorias)
      this.listCategorias = data.listCategorias;
  })
  

  }
  

}
