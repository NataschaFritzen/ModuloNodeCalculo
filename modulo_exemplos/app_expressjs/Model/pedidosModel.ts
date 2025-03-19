import db from "../db";
import sequelize from "sequelize";
import clientsModel from "./clientsModel";
import produtosModel from "./produtosModel";

export default db.define('pedido',{
id: {
    type: sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
},
id_cliente: {
    type: sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
        model:clientsModel,
        key: 'id'
    }
},
id_produto: {
    type: sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
        model:produtosModel,
        key: 'id'
    }
},
quantidade:{
    type: sequelize.INTEGER.UNSIGNED,
    allowNull: false,
}

})