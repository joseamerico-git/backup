import { DataTypes } from "sequelize"
import sequelize  from "../db/connection"
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
<<<<<<< HEAD
        type: DataTypes.STRING
    },

=======
        type:DataTypes.STRING
    },

    
>>>>>>> 1aa6c24bfd668a01da9633c70c288707ff90884d
    estoque:{
        type: DataTypes.INTEGER
    }
    
    

})