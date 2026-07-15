//tela routes/auth

const express = require('express')
const router = express.Router() 


router.get('/login', (req, res) => {
    res.status(200).render('login')
})

router.post('/login', (req, res) => {
        const {usuario, senha} = req.body; 
    res.status(200).render('login')
})

router.get('/logout', (req, res) => {
    res.status(200).render('logout')
})


//404
router.use((req, res) => {
    res.send('404: Page not found')
})

module.exports = router