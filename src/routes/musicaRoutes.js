const express = require('express');
const router = express.Router();
const musicaController = require('../controllers/musicaController');

router.get('/', musicaController.listarTodos);
router.get('/autor/:autor', musicaController.buscarPorAutor);
router.get('/:id', musicaController.buscarPorId);
router.post('/', musicaController.criar);
router.put('/:id', musicaController.atualizar);
router.delete('/:id', musicaController.deletar);

module.exports = router;