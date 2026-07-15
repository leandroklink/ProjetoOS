//tela routes/indexRoutes

const express = require('express')
const router = express.Router() 


router.get('/', (req, res) => {
    res.status(200).render('index')
})

//404
router.use((req, res) => {
    res.send('404: Page not found')
})

module.exports = router