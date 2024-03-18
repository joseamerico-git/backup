import {Router} from  'express';
import { getProdutos, newProduct,getProdutoById, updateProduct} from '../controllers/produto';
import validateToken from './validate-token';

const router = Router();

router.get('/',getProdutos)
router.get('/:id',getProdutoById)
router.post('/',validateToken,newProduct)
router.put('/:id',validateToken,updateProduct)


export default router;