# Forntend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Instalar o Angular CLI

Habilitar execução no PowerShell

PS C:\WINDOWS\system32> Get-ExecutionPolicy -List

        Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined
   UserPolicy       Undefined
      Process       Undefined
  CurrentUser       Undefined
 LocalMachine       Undefined


PS C:\WINDOWS\system32> Set-ExecutionPolicy Unrestricted

Alteração da Política de Execução
A política de execução ajuda a proteger contra scripts não confiáveis. A alteração da política de execução pode
implicar exposição aos riscos de segurança descritos no tópico da ajuda about_Execution_Policies em
https://go.microsoft.com/fwlink/?LinkID=135170. Deseja alterar a política de execução?
[S] Sim  [A] Sim para Todos  [N] Não  [T] Não para Todos  [U] Suspender  [?] Ajuda (o padrão é "N"): A
PS C:\WINDOWS\system32>


## Comandos básicos
 

 ng serve --O //PARA ABRIR O CHROME 

 npm i bootstrap@5.3.2

 Alterções necessárias para bootstrap

 "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
              
            ],

            ## criando as pastas
            components, services, shared e utils

 ## Criação dos components
 ng g c components/login,..sigIn, ... dashboard e navbar   

 ng g c shared/spinner      

 Criamos as interfaces na pasta interfaces Produto, User

 Pesquisar flexbox
 [icones]("https://www.flaticon.com/br/icones")

 Para configurar os endpoints

 navegar para pasta envirorment 
 adicionar 

 Criar então os serviços 

 ng g s services/user

 Importar HttpClientModule em module.ts

 Instalar o toastr
 npm install ngx-toastr --save

 npm install @angular/animations --save

 adicionar em angular json em styles , "node_module/ngx-toastr/toastr.css"

 Guard

 ng g guard utils/auth