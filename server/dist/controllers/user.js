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
exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = require("../models/users");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const nodemailer = require('nodemailer');
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    //Validando usuário, se existe cadastrado
    const user = yield users_1.User.findOne({ where: { username: username } });
    if (user) {
        return res.status(400).json({
            msg: `Usuário com o nome ${username} já existe`
        });
    }
    const hashPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        yield users_1.User.create({
            username: username,
            password: hashPassword
        });
        res.json({
            msg: `Usuário ${username} cadastrado com sucesso!`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Ops ocorreu um erro! ' + error
        });
    }
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // Validamos se usuário existe
    const user = yield users_1.User.findOne({ where: { username: username } });
    if (!user) {
        return res.status(400).json({
            msg: `Usuário com o nome ${username} não existe`
        });
    }
    // Validamos password
    const passwordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password incorreta`
        });
    }
    else {
        // Geramos um token
        const token = jsonwebtoken_1.default.sign({
            username: username
        }, process.env.SECRET_KEY || 'secret123' /*,{expiresIn:'20000'}*/);
        res.json(token);
    }
});
exports.loginUser = loginUser;
