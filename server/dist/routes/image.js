"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imagem_1 = require("../controllers/imagem");
const router = (0, express_1.Router)();
router.get('/', imagem_1.getImagens);
router.post('/', imagem_1.newImagem);
exports.default = router;
