// CursoController.js
import CursoRepository from "../repositories/CursoRepository.js";

class CursoController {
    // Listar todos os cursos
    async index(req, res) {
        try {
            const cursos = await CursoRepository.findAll();
            return res.status(200).json(cursos);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao listar cursos.' });
        }
    }

    // Listar curso por ID
    async show(req, res) {
        try {
            const { id } = req.params;
            const curso = await CursoRepository.findById(id);

            if (!curso) {
                return res.status(404).json({ error: 'Curso não encontrado.' });
            }

            return res.status(200).json(curso);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao buscar curso.' });
        }
    }

    // Criar novo curso
    async store(req, res) {
        try {
            const { disciplina } = req.body;

            if (!disciplina) {
                return res.status(400).json({ error: 'Disciplina é obrigatória.' });
            }

            const novoCurso = await CursoRepository.create({ disciplina });
            return res.status(201).json(novoCurso);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao criar curso.' });
        }
    }

    // Atualizar curso existente
    async update(req, res) {
        try {
            const { id } = req.params;
            const { disciplina } = req.body;

            const cursoExistente = await CursoRepository.findById(id);
            if (!cursoExistente) {
                return res.status(404).json({ error: 'Curso não encontrado.' });
            }

            if (!disciplina) {
                return res.status(400).json({ error: 'Disciplina é obrigatória para atualização.' });
            }

            const cursoAtualizado = await CursoRepository.update(id, { disciplina });
            return res.status(200).json(cursoAtualizado);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao atualizar curso.' });
        }
    }

    // Remover curso
    async delete(req, res) {
        try {
            const { id } = req.params;

            const cursoExistente = await CursoRepository.findById(id);
            if (!cursoExistente) {
                return res.status(404).json({ error: 'Curso não encontrado.' });
            }

            await CursoRepository.delete(id);
            return res.status(204).send(); // Sem conteúdo
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao excluir curso.' });
        }
    }
}

export default new CursoController();
