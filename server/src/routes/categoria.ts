import {Router} from 'express'
import validateToken from './validate-token';

import { deleteCategoria, findCategoriaById, getCategorias, newCategoria, updateCategoria,  } from '../controllers/categoria';
const router = Router();


router.get('/',getCategorias)
router.get('/:id',findCategoriaById)
router.post('/',newCategoria)
//validar o token
//router.put('/', validateToken,updatecategoria)
router .put('/:id',updateCategoria)
//router .delete('/:id',deleteCategoria)



export default router;