"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produto_1 = require("../controllers/produto");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get('/', validate_token_1.default, produto_1.getProdutos);
<<<<<<< HEAD
router.get('/', produto_1.getProdutos);
router.post('/', produto_1.newProduct);
=======
router.get('/', produto_1.getProdutosPublics);
>>>>>>> 1aa6c24bfd668a01da9633c70c288707ff90884d
exports.default = router;
