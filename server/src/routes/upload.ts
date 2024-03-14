import {Router} from 'express'
    import {getUp} from '../controllers/upload'
import uploads from '../upload';
   
const router = Router();

router.post('/',uploads.single('avatar'), (req, res) => {

    const {id} = req.body
    console.log(req.body)
    try {
        res.send(`Arquivo enviado com sucesso: ' + ${req.file?.filename}_${id}`);
    } catch (error) {
        console.log("erro não passou pela função")
        console.log(error);
    }

});





export default router;

