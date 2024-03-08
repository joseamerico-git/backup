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
exports.newCategoria = exports.getCategorias = void 0;
const categorias_1 = require("../models/categorias");
const getCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listCategorias = yield categorias_1.Categoria.findAll();
    res.json({
        listCategorias
    });
});
exports.getCategorias = getCategorias;
const newCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descricao } = req.body;
    console.log(req.body);
    const categoriaRecuperada = yield categorias_1.Categoria.findOne({ where: { descricao: descricao } });
    if (categoriaRecuperada) {
        return res.status(400).json({
            msg: `Categoria com a descrição " ${descricao} " já existe`,
            categoria: categoriaRecuperada
        });
    }
    try {
        yield categorias_1.Categoria.create(req.body);
        res.json({
            msg: `Categoria ${descricao} cadastrado com sucesso!`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Ops ocorreu um erro! ' + error
        });
    }
});
exports.newCategoria = newCategoria;
