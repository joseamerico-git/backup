import { Request, Response } from 'express'
import uploads from '../upload';



export const getUp= async (req: Request,res:Response) => {
    uploads.single('avatar'), (req: Request, res: Response) => {
        try {
            res.send(`Arquivo enviado com sucesso: ' + ${req.file?.filename}`);
        } catch (error) {
            console.log("erro não passou pela função")
            console.log(error);
        }

    };
  }
  


/*

  export async function getUpload(req: Request, res: Response) {

    uploads.single('avatar'), (req: Request, res: Response) => {
        try {
            res.send(`Arquivo enviado com sucesso: ' + ${req.file?.filename}`);
        } catch (error) {
            console.log("erro não passou pela função")
            console.log(error);
        }

    };
}
  */

      
