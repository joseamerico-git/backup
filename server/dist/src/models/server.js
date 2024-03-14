"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const produto_1 = __importDefault(require("../routes/produto"));
const categoria_1 = __importDefault(require("../routes/categoria"));
const user_1 = __importDefault(require("../routes/user"));
const upload_1 = __importDefault(require("../routes/upload"));
const produtos_1 = require("./produtos");
const users_1 = require("./users");
const categorias_1 = require("./categorias");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.POR || '3001';
        console.log("Estou no construtor da classe Server.");
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnection();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicação rodando na porta ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/categorias', categoria_1.default);
        this.app.use('/api/produtos', produto_1.default);
        this.app.use('/api/produtos/view', produto_1.default);
        this.app.use('/api/produtos/create', produto_1.default);
        this.app.use('/api/users', user_1.default);
        this.app.post('/', upload_1.default);
        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        });
    }
    midlewares() {
        // Parseo body
        this.app.use(express_1.default.json());
        // Cors
        //   this.app.use(function(req, res, next) {
        //     res.header('Access-Control-Allow-Origin', '*');
        //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        // next();
        //   });
        this.app.use((0, cors_1.default)());
        //this.app.use(function(req, res, next) {
        //res.header({"origin": "http://localhost:4200/",
        //  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        //  "preflightContinue": false,
        // "optionsSuccessStatus": 204})
        // res.header('Access-Control-Allow-Origin', '*');
        // res.  header("Access-Control-Allow-Methods: PUT, GET, POST");
        // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type  application/json, Accept');
        //res.header('Content-Type: application/json');
        // next();
        //});
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                users_1.User.sync();
                categorias_1.Categoria.sync();
                produtos_1.Produto.sync();
                // Produto.sync({force:true});
            }
            catch (error) {
                console.log("Não houve conexão com o banco de dados!", error);
            }
        });
    }
}
exports.default = Server;
