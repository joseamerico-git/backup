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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_1 = __importDefault(require("../upload"));
const imagens_1 = require("../models/imagens");
const router = (0, express_1.Router)();
router.post('/', upload_1.default.single('avatar'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { productId } = req.body;
    console.log(req.body);
    if (req.file) {
        try {
            res.send(`Arquivo enviado com sucesso: ' + ${(_a = req.file) === null || _a === void 0 ? void 0 : _a.filename} para produto id: ${productId}`);
            imagens_1.Imagem.create({
                nome: `${(_b = req.file) === null || _b === void 0 ? void 0 : _b.filename}`,
                productId: productId,
                url: `http://localhost:3001/files/${(_c = req.file) === null || _c === void 0 ? void 0 : _c.filename}`
            });
        }
        catch (error) {
            console.log("erro não passou pela função");
            console.log(error);
        }
    }
    try {
        res.send(`Arquivo não enviado com sucesso: `);
    }
    catch (error) {
        console.log("erro não passou pela função");
        console.log(error);
    }
}));
exports.default = router;
