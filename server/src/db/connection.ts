import { Sequelize } from "sequelize";

const sequelize = new Sequelize('api','root','usbw',{
    host :'localhost',
    dialect:'mysql'
});

export default sequelize;