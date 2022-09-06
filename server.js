// dependancy section

const path = require('path')
const express = require('express')
const routes = require('./controllers')
const session = require("express-session")


// const sequelize = require("./config/connection")

// setting up the express app 

const app = express() 
const PORT = process.env.PORT || 3001

// app.use(express.json)
// app.use(express.urlencoded({extended:true}))


// this is for using routes
app.use(routes);



const sess = {
    secret: 'super secret',
    saveUninitialized: true,
    resave: false,
    cookie: {
        secure: false,
        maxAge: 100000,
        secure: false,
        sameSite: 'strict',
        httpOnly: true,
    }
};
        
        
    


    app.use(session(sess))
  


// sequelize.sync({force:false}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening on http://localhost:${PORT}`)
    });
// })



