const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const validarJWT = async (req = request, res = response, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: '----- Token no recibido -----'
        });
    }

    try {

        const { uid } = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);

        const user = await User.findById(uid);
        if (!user) {
            return res.status(401).json({
                msg: '----- Token no admitible -----'
            });
        }

        req.user = user;

        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: '----- Error del token -----'

        })
    }
}

module.exports = {
    validarJWT
}