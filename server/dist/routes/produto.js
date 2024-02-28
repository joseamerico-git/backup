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
router.get('/', produto_1.getProdutos);
router.post('/', produto_1.newProduct);
exports.default = router;
