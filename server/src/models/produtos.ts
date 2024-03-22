import { DataTypes } from "sequelize"
import sequelize  from "../db/connection"
import { Categoria } from "./categorias"
import { Imagem } from "./imagens"

export const Produto = sequelize.define('produto',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type: DataTypes.STRING,

    },

    descricao:{
        type: DataTypes.STRING
    },

    image:{
        type: DataTypes.STRING
    },

    estoque:{
        type: DataTypes.INTEGER
    },
   

    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
    } ,
    
 
    
})  
Produto.belongsTo(Categoria, {foreignKey:'categoriaId'}) 

//Produto.hasMany(Imagem,{as : 'imagens', foreignKey : 'idFood'})  
//Imagem.belongsTo(Produto, {foreignKey : 'id'});
//Produto.belongsTo(Imagem, {foreignKey : 'id'});
//db.meal.belongsTo(db.food, {foreignKey : 'idFood'});




  Produto.hasMany(Imagem, {
    foreignKey: "productId",
   // onDelete: "cascade",
  });
 