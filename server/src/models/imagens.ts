import { DataTypes } from "sequelize"
import sequelize  from "../db/connection"
import { Produto } from "./produtos"


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
    },
    productId:{
        type: DataTypes.INTEGER
    }
 
    
})  
Imagem.belongsTo(Imagem, { foreignKey: "productId" });

//Imagem.belongsTo(Produto, {foreignKey:'productId'})

 


