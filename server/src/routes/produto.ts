import {Router} from  'express';
import {  findProdutoById, getProdutos, getProdutosCategoria, newProduct, updateProduct} from '../controllers/produto';
import validateToken from './validate-token';

const router = Router();

router.get('/',getProdutos)
router.get('/cat/:categoriaId',getProdutosCategoria)
router.get('/:id',findProdutoById)
router.post('/',newProduct)
router.put('/:id',validateToken,updateProduct)


export default router;