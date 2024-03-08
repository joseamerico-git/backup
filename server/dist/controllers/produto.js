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
Object.defineProperty(exports, "__esModule", { value: true });
exports.newProduct = exports.getProdutos = void 0;
const produtos_1 = require("../models/produtos");
const categorias_1 = require("../models/categorias");
const getProdutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProdutos = yield produtos_1.Produto.findAll({
        order: [['id', 'DESC']],
        include: [{
                model: categorias_1.Categoria,
            }]
    });
    res.json({
        listProdutos
    });
});
exports.getProdutos = getProdutos;
const newProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("chegou na rota create product");
    const { nome } = req.body;
    console.log(req.body);
    //Validando usuário, se existe cadastrado
    const prodRecuperado = yield produtos_1.Produto.findOne({ where: { nome: nome } });
    if (prodRecuperado) {
        return res.status(400).json({
            msg: `Produto com o nome ${nome} já existe`,
            produto: prodRecuperado
        });
    }
    try {
        yield produtos_1.Produto.create(req.body);
        res.json({
            msg: `Produto ${nome} cadastrado com sucesso!`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Ops ocorreu um erro! ' + error
        });
    }
});
exports.newProduct = newProduct;
