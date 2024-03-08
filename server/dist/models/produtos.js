"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const categorias_1 = require("./categorias");
exports.Produto = connection_1.default.define('produto', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
    },
    descricao: {
        type: sequelize_1.DataTypes.STRING
    },
    image: {
        type: sequelize_1.DataTypes.STRING
    },
    estoque: {
        type: sequelize_1.DataTypes.INTEGER
    },
    categoriaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
});
exports.Produto.belongsTo(categorias_1.Categoria, { foreignKey: 'categoriaId' });
