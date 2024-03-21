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
exports.deleteCategoria = exports.updateCategoria = exports.newCategoria = exports.getCategorias = exports.findCategoriaById = void 0;
const categorias_1 = require("../models/categorias");
const findCategoriaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    categorias_1.Categoria.findByPk(req.params.id).then((result) => res.json(result));
});
exports.findCategoriaById = findCategoriaById;
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
const updateCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descricao } = req.body;
    yield categorias_1.Categoria.update({
        descricao: descricao,
    }, {
        where: {
            id: req.params.id,
        },
    });
    categorias_1.Categoria.findByPk(req.params.id).then((result) => res.json(result));
});
exports.updateCategoria = updateCategoria;
const deleteCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const categoriaRecuperada = yield categorias_1.Categoria.findOne({ where: { id: id } });
    if (!categoriaRecuperada) {
        res.json({
            msg: `Categoria id: ${id} não encontrada!`,
            categoriaRecuperada: categoriaRecuperada
        });
    }
    categorias_1.Categoria.destroy({
        where: {
            id: id
        }
    });
});
exports.deleteCategoria = deleteCategoria;
