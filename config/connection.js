// dependancies section
const Sequelize = require('sequelize');
require('dotenv').config();

// this is used to hold Heroku value or local server value
let sequelize;

// if heroku java db exsits then set equal to URL
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
  
  // this handles running the app locally 
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
// exporting varibale so we can use it else where  
module.exports = sequelize;