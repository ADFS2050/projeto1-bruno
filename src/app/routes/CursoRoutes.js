// Cursoroutes.js

import { Router } from 'express'
import CursoController from '../controllers/CursoController.js';



const router = Router();

// Rotas ligadas ao controller
router.get('/cursos', (req, res) => CursoController.index(req, res))
router.get('/cursos/:id', (req, res) => CursoController.show(req, res))
router.post('/cursos', (req, res) => CursoController.store(req, res))
router.put('/cursos/:id', (req, res) => CursoController.update(req, res))
router.delete('/cursos/:id', (req, res) => CursoController.delete(req, res))

export default router;