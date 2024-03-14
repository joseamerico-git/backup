"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
const express_1 = require("express");
//Configuramos dotenv
dotenv_1.default.config();
const router = (0, express_1.Router)();
const server = new server_1.default();
