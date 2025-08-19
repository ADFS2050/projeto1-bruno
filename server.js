import app from './src/app.js'

import conexao from './infra/conexao.js'

const port = 3000

//Estabelecer a conexão
conexao.connect((error) => {
    if (error)
        console.log (error)
    else
        console.log('Conexao feita')
    app.listen(port, ()=> {
    console.log(`No Brasil Servidor rodando em http://localhost:${port}`)

})
})


// Listening (Escutando)
