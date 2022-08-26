// dependancy section

const path = require('path')
const express = require('express')

const sequelize = require("./config/connection")

// setting up the express app 

const app = express() 
const PORT = process.env.PORT || 3001

app.use(express.json)
app.use(express.urlencoded({extended:true}))


sequelize.sync({force:false}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening on http://localhost:${PORT}`)
    })
})



