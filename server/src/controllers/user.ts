import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { User } from '../models/users';
import jwt from 'jsonwebtoken'
const nodemailer = require('nodemailer');

export const newUser = async (req: Request, res: Response) => {

    const { username, password } = req.body;

    //Validando usuário, se existe cadastrado

    const user = await User.findOne({ where: { username: username } })

    if (user) {
        return res.status(400).json({
            msg: `Usuário com o nome ${username} já existe`
        })
    }


    const hashPassword = await bcrypt.hash(password, 10)
    try {

        await User.create({
            username: username,
            password: hashPassword

        })

        res.json({
            msg: `Usuário ${username} cadastrado com sucesso!`

        })

    } catch (error) {
        res.status(400).json({
            msg: 'Ops ocorreu um erro! ' + error
        })
    }

}

export const loginUser = async (req: Request, res: Response) => {


    const { username, password } = req.body;
    // Validamos se usuário existe


    const user: any = await User.findOne({ where: { username: username } });

    if (!user) {
        return res.status(400).json({
            msg: `Usuário com o nome ${username} não existe`
        })
    }


    // Validamos password

    const passwordValid = await bcrypt.compare(password, user.password)
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password incorreta`
        })
    } else {
        // Geramos um token
        const token = jwt.sign({
            username: username

        }, process.env.SECRET_KEY || 'secret123'/*,{expiresIn:'20000'}*/)

        res.json(token);



    }


      


      
}