const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res, next) => {
    const usuario = new Usuario(req.body);

    try {
        await usuario.save();
        res.json(req.body);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerUsuarios = async (req, res, next) => {
    try {
        const usuarios = await Usuario.find({});
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.editarUsuario = async (req, res, next) => {
    try {
        const usuario = await Usuario.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });
        res.json(usuario);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarUsuario = async (req, res, next) => {
    try {
        await Usuario.findOneAndDelete({_id: req.params.id});
        res.json({_id: req.params.id});
    } catch (error) {
        
    }
}