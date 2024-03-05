"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_1 = require("../controllers/categoria");
const router = (0, express_1.Router)();
router.get('/', categoria_1.getCategorias);
router.post('/', categoria_1.newCategoria);
exports.default = router;
