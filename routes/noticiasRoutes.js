// routes/usuarioRoutes.js
const express = require('express');
const override = require('method-override')
const noticiasController = require('../controller/noticiasController');

const router = express.Router()
router.use(override('_method'))

// Rotas de notícia
router.get('/listarNoticias', noticiasController.listarNoticias);
router.post('/criarNoticia', noticiasController.criarNoticia);
router.put('/editarNoticia/:id', noticiasController.editarNoticia);
router.delete('/deletarNoticia/:id', noticiasController.deletarNoticia);

router.get('/deletarNoticia/:id', noticiasController.formDeletarNoticia);
router.get('/editarNoticia/:id', noticiasController.formEditarNoticia);
router.get('/cadastroNoticia', noticiasController.formCadastro);

module.exports = router;