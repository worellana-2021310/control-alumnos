const { Router } = require('express');
const { getCurso, postCurso, putCurso, deleteCurso, asignarAlumno } = require('../controllers/curso');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esMaestroRole, esAlumnoRole } = require('../middlewares/validar-roles');

const router = Router();
router.get('/view', [
], getCurso);

router.post('/add', [
    validarJWT,
    esMaestroRole
], postCurso);

router.put('/edit/:id', [
    validarJWT
], putCurso);

router.delete('/delete/:id', [
    validarJWT,
    esMaestroRole
], deleteCurso);

router.get('/assign/:idCurso', [
    validarJWT,
], asignarAlumno);

module.exports = router;
