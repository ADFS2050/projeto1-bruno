// Cursorepository.js

import conexao from "../database/conexao.js"

class CursoRepository {
    async findAll() {
        const [rows] = await conexao.query('SELECT * FROM cursos;')
        return rows;
    }

    async findById(id) {
        const [rows] = await conexao.query('SELECT * FROM cursos WHERE id = ?', [id]);
        return rows[0] || null;
    }

    async create({ disciplina }) {
        const [result] = await conexao.query('INSERT INTO cursos (disciplina) VALUES ?;', [disciplina])
        return { id: result.insertId, disciplina };
    }

    async updateById(id) {
        const [rows] = await conexao.query('UPDATE cursos SET ? WHERE id=?;', [id])
        return rows[0] || null;
    }

    async deleteById(id) {
        const [rows] = await conexao.query('DELETE FROM cursos WHERE id = ?', [id]);
        return rows[0] || null;
    }
}

export default new CursoRepository()
