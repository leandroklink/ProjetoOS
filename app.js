const express = require('express');
const path = require('path')
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true })) //usar parser extended
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json()); //configuracao para usar json

app.get('/', (req, res) => {
    res.render('index')});


app.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}.`)
});