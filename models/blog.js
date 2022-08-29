const {Model, DataTypes} = require("sequelize");


const sequelize = require("../config/connection");

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    }
)