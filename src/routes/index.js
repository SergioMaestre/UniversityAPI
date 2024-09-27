const express = require('express');
const studentRouter = require('./student.router');
const routerCourse = require('./course.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/students', studentRouter)
router.use('/courses', routerCourse)

module.exports = router;