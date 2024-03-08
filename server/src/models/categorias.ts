import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Categoria = sequelize.define('categoria',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
    ,
    descricao:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false

    },
   
   
})
