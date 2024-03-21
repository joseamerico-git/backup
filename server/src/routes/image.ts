import {Router} from  'express';
import { getImagens, newImagem, findImagemByProdutctById, findAllImageProductId} from '../controllers/imagem';


const router = Router();


router.get('/',getImagens)
router.get('/:productId',findAllImageProductId) //pega imagens, pelo id do produto

router.post('/',newImagem)


export default router;