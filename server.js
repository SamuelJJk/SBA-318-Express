const express = require('express');
const app = express();
PORT = process.env.PORT || 3000;

const main = require('./data/main')
const sides = require('./data/sides')
const beverages = require('./data/beverage')
const log = require('./middleware/log')
const auth = require('./middleware/auth')
//--------------[setup]

app.use(log)

//---------[middleware]

app.get('/api/main', auth, (req,res) =>{
    res.json(main)
})
app.get('/api/sides', auth, (req,res) =>{
    res.json(sides)
})
app.get('/api/beverages',auth, (req,res) =>{
    res.json(beverages)
})

app.get('/api/main/:id', auth ,(req,res)=>{
    res.json(main.filter(main => main.id === parseInt(req.params.id)))
})
//----------[data]


//----------[View engine]


app.listen(PORT, ()=>{
    console.log('server is running!')
})





//----------[Requirments]
//Create and use at least 2 piece of custom middleware

// create and use error-handling middleware

// Create post route for data, as approprate, At least one data catergory should allow for client creation via a post request 

// Create PATCH or PUT routes for data, as appriprate. At least one data category allow for  client deletion via DELETE request.

// adhere to the guiding principles of REST

// Create and reder at leat one view using a view template and template engine.

//Use simple css to style the rendered views

