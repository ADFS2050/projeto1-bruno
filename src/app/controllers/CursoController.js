// Cursocontroller.js
// import conexao from "../database/conexao.js"
import CursoRepository from "../repositories/CursoRepository.js"

// index(): listar tudo
// show(): listar por id
// store(): criar dados
// update(): atualizar dados
// delete(): remover dados

class CursoController {
    async index(req, res) {
        try {
            const cursos = await CursoRepository.findAll();
            return res.status(200).json(cursos);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Erro ao listar cursos ' })
        }

    }
    async show(req, res) {
        try {
            const cursos = await CursoRepository.findById(req.params.id);
            return res.status(200).json(cursos);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Erro ao listar cursos ' })
        }

    }
    async store(req, res) {
        try {
            const { disciplina } = req.body;
            if (!disciplina) {
                return res.status(400).json({ error: 'Disciplina é obrigatória.' });
            }
            const curso = await CursoRepository.create({ disciplina });
            return res.status(201).json(curso);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Erro ao criar curso.' });
        }
    }
    // update() { }
    // delete() { }
}
export default new CursoController()