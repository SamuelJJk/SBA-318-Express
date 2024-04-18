const express = require('express');
const app = express();
PORT = process.env.PORT || 3000;

const main = require('./data/main')
const sides = require('./data/sides')
const beverages = require('./data/beverage')
//--------------[setup]
app.use('/', (req,res,next) => {
    console.log(`requesting ${req.get('host')}${req.originalUrl}`)
    next();
})

//---------[middleware]

app.get('/api/main', (req,res) =>{
    res.json(main)
})
app.get('/api/sides', (req,res) =>{
    res.json(sides)
})
app.get('/api/beverages', (req,res) =>{
    res.json(beverages)
})

//----------[data]


//----------[View engine]


app.listen(PORT, ()=>{
    console.log('server is running!')
})





//----------[Requirments]
//Create and use at least 2 piece of custom middleware
// create and use error-handling middleware
// Use at least three diff data categories ---[done]
// Utilize reasonable data struturing practices
// Create Get route for all data that should be exposed to the client 
// Create post route for data, as approprate, At least one data catergory should allow for client creation via a post request 
// Create PATCH or PUT routes for data, as appriprate. At least one data category allow for  client deletion via DELETE request.
// Include query parameters for data filtering, where apporrate.
// Utilize route parameters
// adhere to the guiding principles of REST
// Create and reder at leat one view using a view template and template engine.
//Use simple css to style the rendered views

