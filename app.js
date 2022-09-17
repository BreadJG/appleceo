const express = require("express");
const app = express();

const db = require("./db")
app.set("view engine", "ejs");

app.get('/', (req, res)=>{
    res.render('partials/home');
});
    
app.get('/ceo', (req, res)=> {
    res.render('partials/ceo-list', {db:db});
});  
    
app.get('/ceo/:slug', (req, res)=> {
    let {slug} = req.params;
    let index = db.map(e => e.slug).indexOf(slug);
    let ceo = db[index];
    res.render('partials/ceo-information', {db:db, ceo});
});  

var server = app.listen(4000, function() {
    
    console.log('Server running at http://localhost:4000/')
    
});