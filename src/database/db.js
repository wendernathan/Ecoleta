//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto de bd
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto
// db.serialize(() => {
//   // //criar tabela
//   // db.run(`
//   //   CREATE TABLE IF NOT EXISTS places (
//   //     id  INTEGER PRIMARY KEY AUTOINCREMENT,
//   //     image TEXT,
//   //     name TEXT,
//   //     adress TEXT,
//   //     adress2 TEXT,
//   //     state TEXT,
//   //     city TEXT,
//   //     items TEXT

//   //   );
//   // `)

//   // //inserir dados
//   // const query = `
//   //   INSERT INTO places (
//   //     image,
//   //     name,
//   //     adress,
//   //     adress2,
//   //     state,
//   //     city,
//   //     items
//   //   ) VALUES (?,?,?,?,?,?,?);
//   // `

//   // const values = [
//   //   "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80://images.unsplash.com/photo-1567093321629-c23611f44d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   //   "Papersider",
//   //   "Guilherme Gemballa, Jardim América",
//   //   "Nº 260",
//   //   "Santa Catarina",
//   //   "Rio do Sul",
//   //   "Papéis e Papelão"
//   // ]

//   // function afterInsertData(err){
//   //   if (err){
//   //     return console.log(err)
//   //   }
//   //   console.log("Cadastrado com sucesso")
//   //   console.log(this)
//   // }
//   // db.run(query, values, afterInsertData)
  
//   //consultar dados
//   // db.all(`SELECT * FROM places`, function(err,rows){
//   //   if (err){
//   //     return console.log(err)
//   //   }
//   //   console.log("Aqui estão seus Registros")
//   //   console.log(rows)

//   // })
//   // //deletar dados
//   // db.all(`DELETE FROM places WHERE id = ?`,[3], function(err){
//   //   if (err){
//   //     return console.log(err)
//   //   }
//   //   console.log("Registro deletado com sucesso!")
//   //   console.log(rows)
//   // })
// })