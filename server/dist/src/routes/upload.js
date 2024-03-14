"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_1 = __importDefault(require("../../upload"));
const router = (0, express_1.Router)();
router.post('/', upload_1.default.single('avatar'), (req, res) => {
    var _a;
    try {
        res.send(`Arquivo enviado com sucesso: ' + ${(_a = req.file) === null || _a === void 0 ? void 0 : _a.filename}`);
    }
    catch (error) {
        console.log("erro não passou pela função");
        console.log(error);
    }
});
exports.default = router;
