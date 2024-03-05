import {Router} from 'express'

import { getCategorias, newCategoria } from '../controllers/categoria';
const router = Router();


router.get('/',getCategorias)
router.post('/',newCategoria)



export default router;