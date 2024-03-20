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
const image_1 = __importDefault(require("../routes/image"));
const produtos_1 = require("./produtos");
const users_1 = require("./users");
const categorias_1 = require("./categorias");
const imagens_1 = require("./imagens");
const bodyParser = require("body-parser");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        // support parsing of application/json type post data
        this.app.use(bodyParser.json());
        //support parsing of application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: true }));
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
        this.app.use('/api/users', user_1.default);
        this.app.use('/api/imagens', image_1.default);
        this.app.use('/api/produtos/upload', upload_1.default);
        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        });
    }
    midlewares() {
        this.app.use(express_1.default.json());
        this.app.use('/files', express_1.default.static('public'));
        //this.app.use('/files', express.static(path.resolve(__dirname, 'public')))
        this.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE");
            res.header("Access-control-Allow-Headers", "X-PNGOTHER, Content-Type, Authorization");
            next();
        });
        this.app.use((0, cors_1.default)());
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                users_1.User.sync();
                categorias_1.Categoria.sync();
                produtos_1.Produto.sync();
                imagens_1.Imagem.sync();
                // Produto.sync({force:true});
            }
            catch (error) {
                console.log("Não houve conexão com o banco de dados!", error);
            }
        });
    }
}
exports.default = Server;
