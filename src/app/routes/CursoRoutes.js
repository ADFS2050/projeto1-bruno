import { Router } from 'express';
import CursoController from '../controllers/CursoController.js';

const router = Router();

/**
 * @swagger
 * /cursos:
 *   get:
 *     summary: Lista todos os cursos
 *     tags: [Cursos]
 *     responses:
 *       200:
 *         description: Lista de cursos retornada com sucesso
 */
router.get('/cursos', (req, res) => CursoController.index(req, res));

/**
 * @swagger
 * /cursos/{id}:
 *   get:
 *     summary: Retorna um curso específico
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do curso
 *     responses:
 *       200:
 *         description: Curso encontrado
 *       404:
 *         description: Curso não encontrado
 */
router.get('/cursos/:id', (req, res) => CursoController.show(req, res));

/**
 * @swagger
 * /cursos:
 *   post:
 *     summary: Cria um novo curso
 *     tags: [Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Curso criado com sucesso
 */
router.post('/cursos', (req, res) => CursoController.store(req, res));

/**
 * @swagger
 * /cursos/{id}:
 *   put:
 *     summary: Atualiza um curso existente
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Curso atualizado com sucesso
 *       404:
 *         description: Curso não encontrado
 */
router.put('/cursos/:id', (req, res) => CursoController.update(req, res));

/**
 * @swagger
 * /cursos/{id}:
 *   delete:
 *     summary: Remove um curso
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Curso removido com sucesso
 *       404:
 *         description: Curso não encontrado
 */
router.delete('/cursos/:id', (req, res) => CursoController.delete(req, res));

export default router;
