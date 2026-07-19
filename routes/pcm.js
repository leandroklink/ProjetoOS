//tela routes/pcm

const express = require('express')
const router = express.Router() 


router.get('/pcm', (req, res) => {
    console.log('pcm/dashboard')
})

router.get('/pcm/solicitacoes', (req, res) => {
    console.log('pcm/solicitacoes')
})
router.get('/pcm/os/:id', (req, res) => {
    console.log('pcm/solicitacoes')
})


//404
router.use((req, res) => {
    res.send('404: Page not found')
})

module.exports = router



/*
GET  /pcm

GET  /pcm/dashboard

GET  /pcm/solicitacoes

GET  /pcm/os 

GET  /pcm/os/:id

POST /pcm/os/:id/aprovar

POST /pcm/os/:id/rejeitar

POST /pcm/os/:id/finalizar


*/