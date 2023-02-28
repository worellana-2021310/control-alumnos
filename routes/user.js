const { Router } = require('express');
const { getUsers, postUser, putUser, deleteUser, registerUser, getMyCourses, deleteMyUser, putMyUser } = require('../controllers/user');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();
router.post('/add', postUser);
router.post('/register', registerUser);
router.get('/view', [
    validarJWT
], getMyCourses);

router.delete('/delete/:id', [
    validarJWT
], deleteMyUser);

router.put('/edit/:id', [
    validarJWT
], putMyUser);

module.exports = router;
