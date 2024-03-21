"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public");
    },
    filename: function (req, file, cb) {
        const { productId } = req.body;
        cb(null, `${file.originalname}`);
    }
});
const uploads = (0, multer_1.default)({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const extensaoImage = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'].find(formatoAceito => formatoAceito == file.mimetype);
        if (extensaoImage) {
            return cb(null, true);
        }
        return cb(null, false);
    }
});
exports.default = uploads;
