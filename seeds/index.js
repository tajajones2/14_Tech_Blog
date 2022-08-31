const sequelize = require ('../config/connection');


const users = require ('./userData');
const blogs = require ('./blogData')
const comments = require ('./commentData')

const seedDatabase = async () => {
    await sequelize.sync({ force: true})

    await users();

    await blogs();

    await comments();

    process.exit(0);

};

seedDatabase();