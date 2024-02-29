import express, {Application} from 'express';
import cors from 'cors';
import routesProduto from '../routes/produto'
import routesUser from '../routes/user'

import { Produto } from './produtos';
import { User } from './users';



class Server{
    private app: Application;
    private port: string;
   

    constructor(){
        this.app = express();
        this.port = process.env.POR || '3001';
        console.log("Estou no construtor da classe Server.")
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnection();
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Aplicação rodando na porta ' + this.port);
        })
    }

    routes(){
        this.app.use('/api/produtos',routesProduto)
        this.app.use('/api/produtos/view',routesProduto)
        this.app.use('/api/produtos/create',routesProduto)
        this.app.use('/api/users',routesUser)
    }
   
    midlewares(){

        // Parseo body

        this.app.use(express.json());

        // Cors
     //   this.app.use(function(req, res, next) {
       //     res.header('Access-Control-Allow-Origin', '*');
       //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
           // next();
       //   });

        this.app.use(cors());

        this.app.use(function(req, res, next) {

           res.header({"origin": "http://localhost:4200/",
            "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
            "preflightContinue": false,
            "optionsSuccessStatus": 204})


           // res.header('Access-Control-Allow-Origin', '*');
           // res.  header("Access-Control-Allow-Methods: PUT, GET, POST");
           // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type  application/json, Accept');
            //res.header('Content-Type: application/json');
            next();
          });

    }

    async dbConnection(){
        try {
            Produto.sync();
            User.sync();
           
            
        } catch (error) {
            console.log("Não houve conexão com o banco de dados!", error)
        }
    }
}
export default Server;