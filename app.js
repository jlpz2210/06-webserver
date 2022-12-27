const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();

app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home',{
        nombre:'Juan',
        titulo:'Curso'
    });
})

app.get('/generic',(req,res)=>{
    res.render('generic');
})

app.get('/elements',(req,res)=>{
    res.render('elements');
})

app.listen(process.env.PORT);