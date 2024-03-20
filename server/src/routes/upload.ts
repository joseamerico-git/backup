import {Router} from 'express'
    import {getUp} from '../controllers/upload'
import uploads from '../upload';
import { Imagem } from '../models/imagens';
   
const router = Router();

router.post('/',uploads.single('avatar'), async (req, res) => {

    const {productId} = req.body
    console.log(req.body)

    if(req.file){
        try {
            res.send(`Arquivo enviado com sucesso: ' + ${req.file?.filename} para produto id: ${productId}`);
            Imagem.create({
                nome: `${req.file?.filename}`,
                productId:productId,
                url:`http://localhost:3001/files/${req.file?.filename}`
                
            })
        } catch (error) {
            console.log("erro não passou pela função")
            console.log(error);
        }
    }
   
    try {
        res.send(`Arquivo não enviado com sucesso: `);
    } catch (error) {
        console.log("erro não passou pela função")
        console.log(error);
    }

});





export default router;

