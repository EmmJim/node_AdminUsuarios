const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController.js');

module.exports = function() {

    //Rutas
    router.post('/crear',
        usuarioController.crearUsuario
    );

    router.get('/usuarios',
        usuarioController.obtenerUsuarios
    );

    router.put('/editar/:id',
        usuarioController.editarUsuario
    );

    router.delete('/eliminar/:id',
        usuarioController.eliminarUsuario
    )

    return router;
}