import { Request, Response } from 'express';
import { Produto } from '../models/produtos';
import { Categoria } from '../models/categorias';
import { Imagem } from '../models/imagens';



export const getProdutos = async (req: Request, res: Response) => {

  const listProdutos = await Produto.findAll({
    
    order: [['id', 'DESC']],

    include: [{
      model:Categoria

    },
    {
      model:Imagem
    }
  
  
  ]


  });
  res.json({
    listProdutos
  })
}




export const getProdutosCategoria = async (req: Request, res: Response) => {
   const categoriaId = req.params.categoriaId;
  const listProdutos = await Produto.findAll({
    
    where: { categoriaId: categoriaId },
    order: [['id', 'DESC']],

    include: [{
      model:Categoria

    },
    {
      model:Imagem
    }
  
  
  ]


  });
  res.json({
    listProdutos
  })
}


export const  findProdutoById = async(req:Request, res:Response) => {
  Produto.findByPk(req.params.id).then((result) => res.json(result));
}

export const newProduct = async (req: Request, res: Response) => {
  console.log("chegou na rota create product")

  
  const { nome,descricao,estoque,categoriaId} = req.body;
 
  console.log(req.body)
  //Validando usuário, se existe cadastrado

  const prodRecuperado = await Produto.findOne({ where: { nome: nome } })

  if (prodRecuperado) {
    return res.status(400).json({
      msg: `Produto com o nome ${nome} já existe`,
      produto: prodRecuperado
    })
  }


  const newProduct = {
    nome:nome,
    descricao:descricao,
    estoque:estoque,
    categoriaId:categoriaId

  }

  try {

    await Produto.create(newProduct)

    res.json({
      msg: `Produto ${nome} cadastrado com sucesso!`

    })

  } catch (error) {
    res.status(400).json({
      msg: 'Ops ocorreu um erro! ' + error
    })
  }

}
export const updateProduct = async (req: Request, res: Response) => {
  // const id = req.params.id
  //const prodRecuperado = await Produto.findOne({ where: { id: id } })

  //if (prodRecuperado) {
  //return res.status(400).json({
  //    msg: `Produto com o nome ${id} já existe agora podemos alteralo`,
  //    produto:prodRecuperado
  // })
  // }

  //"nome":"Sabão em pó",
  //"descricao":"Produto de limpeza",
  //"image":"http://image",
  //"estoque":200,
  //"creadedAt":"2024-02-20",
  //"updatedAt":"2024-02-20",
  //"categoriaId":2

  const { nome, descricao, image, estoque, productId, } = req.body

  const produtoAlterado = {
    nome: nome,
    descricao: descricao,
    estoque: estoque,
    productId: productId
  }



  try {

    const produto = await Produto.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    res.json({
      msg: `Produto ${nome} alterado com sucesso!`,
      produto: produto

    })

  } catch (error) {
    res.status(400).json({
      msg: 'Ops ocorreu um erro! ' + error
    })
  }

}


