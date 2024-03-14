import { DataTypes } from "sequelize"
import sequelize  from "../db/connection"


export const Imagem = sequelize.define('imagens',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type: DataTypes.STRING,

    },

    url:{
        type: DataTypes.STRING
    }
 
    
})  
 


