import {Router} from  'express';
import { getProdutos, newProduct} from '../controllers/produto';
import validateToken from './validate-token';

const router = Router();

router.get('/',validateToken,getProdutos)
router.get('/',getProdutos)
router.post('/',newProduct)


export default router;