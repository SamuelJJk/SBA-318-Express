const express = require('express');
const app = express('uuid');
const uuid = require
PORT = process.env.PORT || 3000;

const main = require('./data/main') 
const sides = require('./data/sides')
const beverages = require('./data/beverage')
const log = require('./middleware/log')
const auth = require('./middleware/auth')
//--------------[setup]

app.use(log)
// app.use('/api/main', require('./routes/paths')) 

app.use(express.json());
app.use(express.urlencoded({extended: false }));

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

// create new main dish
app.post('/api/main', (req,res)=>{
    const newMain = {
        id: req.body.id,
        name: req.body.name,
        calories: req.body.calories
    }
    if(!newMain.name || !newMain.calories || !newMain.id){
       return res.status(400).json({msg: 'include a name and calories'})
    }
    main.push(newMain)
    res.json(main)

})

app.delete("/api/sides/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const deleteSides = sides.find(sides => sides.id === id)
    const index = sides.indexOf(deleteSides)

    sides.splice(index, 1)
    res.json(sides)
})


//----------[data]
app.engine('perscholas', (filePath, options, callback) => {
    fileSystem.readFile(filePath, (err, content) => {
      if (err) return callback(err);
  
      const rendered = content
        .toString()
        .replaceAll("#title#", `${options.title}`)
        .replace("#content#", `${options.content}`);
  
      return callback(null, rendered);
    })
  })
app.set('views', './views')
app.set('view engine', 'perscholas')

app.get('/', (req, res) => {
  let options = {
    title: 'This is an Express Template',
    content: "Finally, a call to res.render() within the application's routes allows us to render the view..."
  };

  res.render('index', options)
})

//----------[View engine]


app.listen(PORT, ()=>{
    console.log('server is running!')
})





//----------[Requirments]

// create and use error-handling middleware 

// Create PATCH or PUT routes for data, as appriprate. At least one data category allow for  client deletion via DELETE request.

// Create and reder at leat one view using a view template and template engine.

//Use simple css to style the rendered views

