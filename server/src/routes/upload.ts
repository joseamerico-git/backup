import {Router} from 'express'
    import {getUpload} from '../controllers/upload'
import uploads from '../upload';
   
const router = Router();

router.post('/',uploads.single('avatar'), (req, res) => {
    try {
        res.send(`Arquivo enviado com sucesso: ' + ${req.file?.filename}`);
    } catch (error) {
        console.log("erro não passou pela função")
        console.log(error);
    }

});





export default router;

