"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_1 = require("../controllers/categoria");
const router = (0, express_1.Router)();
router.get('/', categoria_1.getCategorias);
router.get('/:id', categoria_1.findCategoriaById);
router.post('/', categoria_1.newCategoria);
//validar o token
//router.put('/', validateToken,updatecategoria)
router.put('/:id', categoria_1.updateCategoria);
//router .delete('/:id',deleteCategoria)
exports.default = router;
