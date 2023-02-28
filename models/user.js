const { Schema, model } = require('mongoose');
const UserSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
        upercase: true.valueOf,
        default: 'ROL_ALUMNO'

    },
    cursos: {
        type: Array,
        default: []
    }
});

module.exports = model('User', UserSchema);