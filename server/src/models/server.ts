import express, { Application } from 'express';
import cors from 'cors';
import routesProduto from '../routes/produto'
import routesCategoria from '../routes/categoria'
import routesUser from '../routes/user'
import routesUpload from '../routes/upload'
import routesImage from '../routes/image'

import { Produto } from './produtos';
import { User } from './users';
import { Categoria } from './categorias';
import { Imagem } from './imagens';

import bodyParser = require('body-parser');
import path from 'node:path';





class Server {
    private app: Application;
    private port: string;

   
    constructor() {
        this.app = express();
      

        // support parsing of application/json type post data
        this.app.use(bodyParser.json());

        //support parsing of application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: true }));


        this.port = process.env.POR || '3001';
        console.log("Estou no construtor da classe Server.")
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnection();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicação rodando na porta ' + this.port);
        })
    }

    routes() {

   
        this.app.use('/api/categorias', routesCategoria)
       
        
        this.app.use('/api/produtos', routesProduto)
        this.app.use('/api/users', routesUser)
        this.app.use('/api/imagens', routesImage)

        this.app.use('/api/produtos/upload', routesUpload)

        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        })
       


    }

    midlewares() {



        this.app.use(express.json());

        this.app.use('/files', express.static('public'))
        //this.app.use('/files', express.static(path.resolve(__dirname, 'public')))
      
        this.app.use(function(req, res, next) {
           res.header('Access-Control-Allow-Origin', '*');
            res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE");
            res.header("Access-control-Allow-Headers" , "X-PNGOTHER, Content-Type, Authorization");
          
            next();
            
       });

       this.app.use(cors())
       



    }

    async dbConnection() {
        try {
            User.sync();
            Categoria.sync();
            Produto.sync();
            Imagem.sync();
            // Produto.sync({force:true});




        } catch (error) {
            console.log("Não houve conexão com o banco de dados!", error)
        }
    }
}
export default Server;