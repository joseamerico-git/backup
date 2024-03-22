"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imagem = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Imagem = connection_1.default.define('imagens', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
    },
    url: {
        type: sequelize_1.DataTypes.STRING
    },
    productId: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.Imagem.belongsTo(exports.Imagem, { foreignKey: "productId" });
//Imagem.belongsTo(Produto, {foreignKey:'productId'})
