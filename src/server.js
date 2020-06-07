const express = require("express")
const server = express()

// pegando o banco
const db = require("./database/db.js")

//config pasta public
server.use(express.static("public"))

//habilitar o uso do reqbody
server.use(express.urlencoded({extended: true}))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
  express: server,
  noCache: true
})

//connfigurar caminhos
//pagina inical
//req:requisição
//res: resposta
server.get("/", (req, res) =>{
  return res.render("index.html")
})

server.get("/create-point", (req, res) =>{
  //req.query
  // console.log(req.query)

  return res.render("create-point.html")
})

server.post("/savepoint",(req,res)=>{
  //req.body envio pelo corp
  //inserir dados no banco

  const query = `
    INSERT INTO places (
      image,
      name,
      adress,
      adress2,
      state,
      city,
      items
    ) VALUES (?,?,?,?,?,?,?);
  `

  const values = [
    req.body.image,
    req.body.name,
    req.body.adress,
    req.body.adress2,
    req.body.state,
    req.body.city,
    req.body.items
  ]

  function afterInsertData(err){
    if (err){
      return console.log(err)
    }
    console.log("Cadastrado com sucesso")
    console.log(this)

    return res.render("create-point.html", {saved: true})
  }
  db.run(query, values, afterInsertData)
})

server.get("/search-results", (req, res) =>{

  const search =req.query.search
  
  if(search == ""){
    //pesquisa vazia
    return res.render("search-results.html",{ total: 0})
  }
  
  //pegar os dados do banco
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err,rows){
     if (err){
       console.log(err)
       return res.send("Erro no Cadastro")
       //criar uma pagina de erro e voltar para o form
     }
    console.log(rows)
    console.log("Aqui estão seus Registros")
    
    const total = rows.length

    // mostrar a pagina com os dados do banco
    return res.render("search-results.html",{ places: rows, total: total})

   })


})
//ligar o servidor
server.listen(3000)