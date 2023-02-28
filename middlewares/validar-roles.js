const { request, response } = require('express');

const esMaestroRole = (req = request, res = response, next) => {
    if (!req.user) {
        return res.status(500).json({
            msg: '----- Antes inicia sesión -----'
        })
    }

    const { rol, nombre } = req.user
    if (rol != 'ROL_MAESTRO') {
        return res.status(401).json({
            msg: '----- Acceso denegado -----'
        })
    }
    next();
}

const esAlumnoRole = (req = request, res = response) => {
    if (!req.user) {
        return res.status(500).json({
            msg: '----- Rol no valido para esta opción -----'
        })
    }
}

module.exports = {
    esMaestroRole,
    esAlumnoRole
}