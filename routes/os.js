//tela routes/os

const express = require('express')
const router = express.Router() 


router.get('/os', (req, res) => {
    res.status(200).render('os/osLista')
})

router.get('/os/criar', (req, res) => {
    res.status(200).render('os/criar')
})

router.post('/os/criar', (req, res) => {
    const {titulo, descricao, matricula, setor, data, status} = req.body; 
    const novaOS = {titulo:titulo, descricao:descricao, matricula:matricula, setor:setor, data:data, status:status};
})

router.get('/os/:id', (req, res) => {
    res.status(200).render('os/:id')
})

router.get('/os/:id/editar', (req, res) => {
    res.status(200).render('os/editar')
})

router.post('/os/:id/editar', (req, res) => {
    const {titulo, descricao, matricula, setor, data, status} = req.body; 
    const osAlterada = {titulo:titulo, descricao:descricao, matricula:matricula, setor:setor, data:data, status:status};
})

router.post('/os/:id/solicitar-fechamento', (req, res) => {
    const {id} = req.body; 
    const osAlterada = {id:id};
})

router.post('/os/:id/cancelar', (req, res) => {
    const {id} = req.body; 
    const osAlterada = {id:id};
})

//404
router.use((req, res) => {
    res.send('404: Page not found')
})

module.exports = router

