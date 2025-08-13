import app from './src/app.js'

const port = 3000

// Listening (Escutando)
app.listen(port, ()=> {
    console.log(`No Brasil Servidor rodando em http://localhost:${port}`)
})