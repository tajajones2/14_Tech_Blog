const {User} = require('../models')

const userData = [{
    username: 'Taja',
    password: 'password',
}];

const users = () => User.bulkCreate (userData, {
    individualHooks: true,
    returning: true,
});

module.exports = users;


