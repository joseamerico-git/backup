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
exports.updateProduct = exports.newProduct = exports.findProdutoById = exports.getProdutosCategoria = exports.getProdutos = void 0;
const produtos_1 = require("../models/produtos");
const categorias_1 = require("../models/categorias");
const imagens_1 = require("../models/imagens");
const getProdutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProdutos = yield produtos_1.Produto.findAll({
        order: [['id', 'DESC']],
        include: [{
                model: categorias_1.Categoria
            },
            {
                model: imagens_1.Imagem
            }
        ]
    });
    res.json({
        listProdutos
    });
});
exports.getProdutos = getProdutos;
const getProdutosCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoriaId = req.params.categoriaId;
    const listProdutos = yield produtos_1.Produto.findAll({
        where: { categoriaId: categoriaId },
        order: [['id', 'DESC']],
        include: [{
                model: categorias_1.Categoria
            },
            {
                model: imagens_1.Imagem
            }
        ]
    });
    res.json({
        listProdutos
    });
});
exports.getProdutosCategoria = getProdutosCategoria;
const findProdutoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    produtos_1.Produto.findByPk(req.params.id).then((result) => res.json(result));
});
exports.findProdutoById = findProdutoById;
const newProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("chegou na rota create product");
    const { nome, descricao, estoque, categoriaId } = req.body;
    console.log(req.body);
    //Validando usuário, se existe cadastrado
    const prodRecuperado = yield produtos_1.Produto.findOne({ where: { nome: nome } });
    if (prodRecuperado) {
        return res.status(400).json({
            msg: `Produto com o nome ${nome} já existe`,
            produto: prodRecuperado
        });
    }
    const newProduct = {
        nome: nome,
        descricao: descricao,
        estoque: estoque,
        categoriaId: categoriaId
    };
    try {
        yield produtos_1.Produto.create(newProduct);
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
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const id = req.params.id
    //const prodRecuperado = await Produto.findOne({ where: { id: id } })
    //if (prodRecuperado) {
    //return res.status(400).json({
    //    msg: `Produto com o nome ${id} já existe agora podemos alteralo`,
    //    produto:prodRecuperado
    // })
    // }
    //"nome":"Sabão em pó",
    //"descricao":"Produto de limpeza",
    //"image":"http://image",
    //"estoque":200,
    //"creadedAt":"2024-02-20",
    //"updatedAt":"2024-02-20",
    //"categoriaId":2
    const { nome, descricao, image, estoque, productId, } = req.body;
    const produtoAlterado = {
        nome: nome,
        descricao: descricao,
        estoque: estoque,
        productId: productId
    };
    try {
        const produto = yield produtos_1.Produto.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json({
            msg: `Produto ${nome} alterado com sucesso!`,
            produto: produto
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Ops ocorreu um erro! ' + error
        });
    }
});
exports.updateProduct = updateProduct;
