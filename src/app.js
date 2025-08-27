import express from "express"
import conexao from "./app/database/conexao.js"
import CursoController from './app/controller/CursoController.js'

const app = express()

//app.use(express.json())

function buscarCursosPorId(id){
    return cursos.filter( curso => curso.id == id)
}

function buscarIndexCurso(id){
    return cursos.findIndex( curso => curso.id == id)
}

app.get('/cursos', CursoController.index) 

app.get('/cursos/:id',(req, res)=> {
    const { id } = req.params
    const sql = "select * from curso where id = ?;"
    conexao.query(sql, [id], (error, result) =>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).json(result)
        }
    })
}) 

app.post('/cursos',(req, res)=> {
    const curso = req.body
    const sql = "insert into curso set ?;"
    conexao.query(sql, curso, (error, result) =>{
        if (error) {
            console.log(error)
        } else {
            res.status(201).json(result)
        }
    })
}) 

app.put('/cursos/:id',(req, res)=> {
    const { id } = req.params
    const dados = req.body
    const sql = "update curso set ? where id = ?;"
    conexao.query(sql, [dados, id], (error, result) =>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).json(result)
        }
    })
}) 

app.delete('/cursos/:id',(req, res)=> {
    const { id } = req.params
    const sql = "delete from curso where id = ?;"
    conexao.query(sql, [id], (error, result) =>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).json(result)
        }
    })
}) 


export default app

