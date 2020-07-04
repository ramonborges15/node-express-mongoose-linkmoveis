//Permitir que as rotas sejam criadas em arquivos separados.
const express = require('express')
const router = express.Router()

//Página principal da tela de admin
router.get('/', (req, res) => {
    res.render('admin/index')
})

router.get('/produtos/add', (req, res) => {
    res.render('admin/addProduto')
})


module.exports = router
