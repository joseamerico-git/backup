import { Request, Response } from 'express';
import { Imagem } from '../models/imagens';
import { Produto } from '../models/produtos';

export const getImagens = async (req: Request, res: Response) => {

  const listImagens = await Imagem.findAll({
    order: [['id', 'DESC']],

   


  });
  res.json({
    listImagens
  })
}


export const findImagemByProdutctById = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  Imagem.findOne({ where: { productId: productId } }).then((result) => res.json(result));
}


export const findAllImageProductId = async (req: Request, res: Response) => {
  const productId = req.params.productId;

  const listImagens = await Imagem.findAll({
    where: { productId: productId },
    order: [['id', 'DESC']],

    include: [{
      model: Produto,

    }]


  });
  res.json({
    listImagens
  })
}




export const newImagem = async (req: Request, res: Response) => {
  console.log("chegou na rota create imagens")
  const { nome, productId } = req.body;
  console.log(req.body)
  console.log(productId)


  const prodRecuperado = await Produto.findOne({ where: { nome: nome } })

  if (prodRecuperado) {
    return res.status(400).json({
      msg: `Produto com o nome ${nome} já existe`,
      produto: prodRecuperado
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