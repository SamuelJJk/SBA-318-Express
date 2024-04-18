const express = require('express')
const app = express();

const auth = app.use('/', (req,res,next) => {
    console.log(`Auth`)
    next();
})
module.exports = auth;

