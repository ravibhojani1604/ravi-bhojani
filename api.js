const express = require('express');
const hbs = require("hbs")
const api = express();
var path = require('path');



api.use(express.static(path.join(__dirname, 'public')));
api.set('view engine', 'hbs')

hbs.registerPartials(__dirname+ '/views/partials')

api.get("",(req,res)=>{

    res.render('index',{
        data:"ravi"
    })
})

api.listen(4000)