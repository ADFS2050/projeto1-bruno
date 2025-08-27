// indexedDB(): Lista tudo
// show(): Lista por id
// store(): criar dados
// update(): atualizar dados
// delete(): remover dados

import conexao from "../database/conexao"

class CursoController{
    index(req, res) {
        const sql = "select * from curso;"
        conexao.query(sql, (error, result) => {
            if (error) {
                console.log(error)
            } else {
                res.status(200).json(result)
            }
        })
    }

    show() { }
    store() { }
    update() { }
    delete() { }
}


export default new CursoController()