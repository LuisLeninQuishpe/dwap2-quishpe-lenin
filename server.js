const express = require('express')
const app = express()

const hbs = require('hbs');

require('./data/ProData');

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public' ));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home',{
        libro1: 'Amor',
        libro2: 'terror',
        libro3: 'risa',
        precio1: 10.00,
        precio2: 11.00,
        precio3: 15.00
    });
});
app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});