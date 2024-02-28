import {Router} from  'express';
<<<<<<< HEAD
import { getProdutos, newProduct} from '../controllers/produto';
=======
import { getProdutos, getProdutosPublics } from '../controllers/produto';
>>>>>>> 1aa6c24bfd668a01da9633c70c288707ff90884d
import validateToken from './validate-token';

const router = Router();

router.get('/',validateToken,getProdutos)
<<<<<<< HEAD
router.get('/',getProdutos)
router.post('/',newProduct)


=======
router.get('/',getProdutosPublics)
>>>>>>> 1aa6c24bfd668a01da9633c70c288707ff90884d
export default router;