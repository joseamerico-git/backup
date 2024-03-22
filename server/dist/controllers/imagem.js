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
exports.newImagem = exports.findAllImageProductId = exports.findImagemByProdutctById = exports.getImagens = void 0;
const imagens_1 = require("../models/imagens");
const produtos_1 = require("../models/produtos");
const getImagens = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listImagens = yield imagens_1.Imagem.findAll({
        order: [['id', 'DESC']],
    });
    res.json({
        listImagens
    });
});
exports.getImagens = getImagens;
const findImagemByProdutctById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    imagens_1.Imagem.findOne({ where: { productId: productId } }).then((result) => res.json(result));
});
exports.findImagemByProdutctById = findImagemByProdutctById;
const findAllImageProductId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    const listImagens = yield imagens_1.Imagem.findAll({
        where: { productId: productId },
        order: [['id', 'DESC']],
        include: [{
                model: produtos_1.Produto,
            }]
    });
    res.json({
        listImagens
    });
});
exports.findAllImageProductId = findAllImageProductId;
const newImagem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("chegou na rota create imagens");
    const { nome, productId } = req.body;
    console.log(req.body);
    console.log(productId);
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
exports.newImagem = newImagem;
