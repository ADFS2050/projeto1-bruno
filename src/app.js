import express from "express"
import conexao from "../infra/conexao.js"
const app = express()

app.use(express.json())

// const cursos = [
//     {id: 1, disciplina: 'ADS'},
//     {id: 2, disciplina: 'ADS'},
//     {id: 3, disciplina: 'ADS'},
//     {id: 4, disciplina: 'ADS'}
// ]

function buscarCursosPorId(id){
    return cursos.filter( curso => curso.id == id)
}

function buscarIndexCurso(id){
    return cursos.findIndex( curso => curso.id == id)
}

//Criando um rota default (endpoint)
// app.get('/',(req, res)=> {
//      res.send('Hello World Senac')
// }) 

//ROTAS 
app.get('/cursos' , (req, res)=> {
    //res.status(200).send(cursos)
    const sql = "select * from curso;"
    conexao.query(sql, (error, result) =>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).json(result)
        }
    })
}) 


app.post('/cursos',(req, res)=> {
    cursos.push(req.body)
    res.status(200).send('Seleção cadastrada com sucesso!')
}) 

//Coletando informações do usuário
app.get('/cursos/:id',(req, res)=> {
    let index = req.params.id
    console.log(index)
})

//Buscando por id 
app.get('/cursos/:id',(req, res)=> {
    res.json(buscarCursosPorId(req.params.id))
})

//Deletando por id
app.delete('/cursos/:id',(req, res)=> {
    let index = buscarIndexCurso(req.params.id)
    cursos.slice(index, 1)
    console.log(index)
    res.send(`O curso com id ${rep.parms.id} excluido com sucesso!`)
})

//Update por id
app.put('/cursos/:id',(req, res)=> {
    let index = buscarIndexCurso(req.params.id)
    cursos [index].disciplina = req.body.disciplina
    res.status(200).json(cursos)
})


export default app

