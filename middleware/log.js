const express = require('express')
const app = express();

const log = app.use('/', (req,res,next) => {
    console.log(`requesting ${req.get('host')}${req.originalUrl}`)
    next();
})





module.exports = log