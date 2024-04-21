const express = require('express')
const router = express.Router();
// const main = require('./data/main')




router.get('/', auth, (req,res) =>{
    res.json(main)
})

router.get('/', auth ,(req,res)=>{
    res.json(main.filter(main => main.id === parseInt(req.params.id)))
})

module.exports = router;