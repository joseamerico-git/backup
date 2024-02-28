import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';


const validateToken = (req:Request,res: Response,next:NextFunction) =>{
    
    const headerToken = req.headers['authorization']
   

    if(headerToken!=undefined && headerToken.startsWith('Bearer') ){
        // Tem token?
      

       
           
           try {
            const bearerToken = headerToken.slice(7);
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'secret123');
            console.log(bearerToken)
            next()
            
           } catch (error) {
             console.log(error)
             return res.status(401).json({
                msg:"Token inválido!"
             })
           }
             
         } 
      
    else{
        res.status(401).json({
            msg:`Acesso negado!`
        })
    }
    //
    
}
export default validateToken;