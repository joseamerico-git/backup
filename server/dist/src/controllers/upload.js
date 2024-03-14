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
exports.getUpload = void 0;
const upload_1 = __importDefault(require("../../upload"));
function getUpload(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        upload_1.default.single('avatar'), (req, res) => {
            var _a;
            try {
                res.send(`Arquivo enviado com sucesso: ' + ${(_a = req.file) === null || _a === void 0 ? void 0 : _a.filename}`);
            }
            catch (error) {
                console.log("erro não passou pela função");
                console.log(error);
            }
        };
    });
}
exports.getUpload = getUpload;
