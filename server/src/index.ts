import dotenv from 'dotenv';
import  Server from "./models/server";
import { Router } from 'express';



//Configuramos dotenv
dotenv.config();

const router = Router();


const server = new Server()
