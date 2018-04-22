const express = require('express');
const hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    res.render('home.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear(),
        message: 'Weclome to my home page'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'you hit the bad URL'
    })
});

app.listen(3000, ()=>{
    console.log('Server is up on port 3000');
});