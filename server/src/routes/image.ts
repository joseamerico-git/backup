import {Router} from  'express';
import { getImagens, newImagem,getImagensByProductId} from '../controllers/imagem';


const router = Router();


router.get('/',getImagens)
router.get('/:productId',getImagensByProductId) //pega imagens, pelo id do produto

router.post('/',newImagem)


export default router;