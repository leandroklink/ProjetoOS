const express = require('express');
const path = require('path')
const port = 3000;
const app = express();
const routes = require('./routes/indexRoutes')
const authRoutes = require('./routes/auth')
const osRoutes = require('./routes/os')
const pcmRoutes = require('./routes/pcm')



app.use(express.urlencoded({ extended: true })) //usar parser extended
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json()); //configuracao para usar json

app.use('/', routes);
app.use('/auth', authRoutes);
app.use('/os', osRoutes);
app.use('/pcm', pcmRoutes);




app.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}.`)
});
