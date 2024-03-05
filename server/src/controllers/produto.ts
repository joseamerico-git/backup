import {Request, Response} from 'express';
import { Produto } from '../models/produtos';

export const getProdutos = async (req: Request,res:Response) => {
 
  const listProdutos = await Produto.findAll();
  res.json({
    listProdutos
  })
}


	
export const newProduct = async (req: Request, res: Response) => {
  console.log("chegou na rota create product")
  const { nome } = req.body;
   console.log(req.body)
  //Validando usuário, se existe cadastrado
  
  const prodRecuperado = await Produto.findOne({ where: { nome: nome } })

  if (prodRecuperado) {
      return res.status(400).json({
          msg: `Produto com o nome ${nome} já existe`,
          produto:prodRecuperado
      })
  }


  
  try {

      await Produto.create(req.body)

      res.json({
          msg: `Produto ${nome} cadastrado com sucesso!`

      })

  } catch (error) {
      res.status(400).json({
          msg: 'Ops ocorreu um erro! ' + error
      })
  }

}