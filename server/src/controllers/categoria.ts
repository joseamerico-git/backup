import { Request, Response } from 'express';
import { Categoria } from '../models/categorias';


export const  findCategoriaById = async(req:Request, res:Response) => {
  Categoria.findByPk(req.params.id).then((result) => res.json(result));
}



export const getCategorias = async (req: Request, res: Response) => {

  const listCategorias = await Categoria.findAll();
  res.json({
    listCategorias
  })
}



export const newCategoria = async (req: Request, res: Response) => {

  const { descricao } = req.body;
  console.log(req.body)


  const categoriaRecuperada = await Categoria.findOne({ where: { descricao: descricao } })

  if (categoriaRecuperada) {
    return res.status(400).json({
      msg: `Categoria com a descrição " ${descricao} " já existe`,
      categoria: categoriaRecuperada
    })
  }



  try {

    await Categoria.create(req.body)

    res.json({
      msg: `Categoria ${descricao} cadastrado com sucesso!`

    })

  } catch (error) {
    res.status(400).json({
      msg: 'Ops ocorreu um erro! ' + error
    })
  }

}
export const  updateCategoria = async(req:Request, res:Response) =>{
  const {descricao} = req.body
  await Categoria.update(
    {
      descricao: descricao,
      
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  Categoria.findByPk(req.params.id).then((result) => res.json(result));
}


export const deleteCategoria = async (req: Request, res: Response) => {
  const id = req.params.id

  const categoriaRecuperada = await Categoria.findOne({ where: { id: id } })

  if (!categoriaRecuperada) {
    res.json({
      msg: `Categoria id: ${id} não encontrada!`,
      categoriaRecuperada: categoriaRecuperada
    })
  }

  Categoria.destroy({
    where: {
      id: id
    }
  });

}

