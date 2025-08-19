import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: '127.0.0.1' ,
    port: '' ,
    user:  'root' ,
    password: '',
    database: 'cursodb'
})


/*Aplicamos export para utilizar objeto em outro lugar*/
export default conexao