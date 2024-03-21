import {Router} from  'express';
import { findProdutoById, getProdutos, newProduct, updateProduct} from '../controllers/produto';
import validateToken from './validate-token';

const router = Router();

router.get('/',getProdutos)
router.get('/:id',findProdutoById)
router.post('/',validateToken,newProduct)
router.put('/:id',validateToken,updateProduct)


export default router;