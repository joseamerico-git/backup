import {Router} from  'express';
import { getImagens, newImagem} from '../controllers/imagem';


const router = Router();


router.get('/',getImagens)
router.post('/',newImagem)


export default router;