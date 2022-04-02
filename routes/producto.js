// rutas para producto

const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController')


//api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProdcutos);
router.put('/:id', productoController.actualizarProdcuto);



module.exports = router