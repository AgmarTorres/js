const porta = 3003
// Porta é um processo do computador
// Quando os dois computadores vão conversar essas informações devems ser sicronizadas por um canal, no caso na porta.

//Cada processo que precisa se comunicar, usa a porta
//porta define qual processo vai atender aquela requisição


//npm -i


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./BancoDeDados')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/produtos', (req, res, next) => {
        res.send(bancoDeDados.getProdutos)
    //console.log('Middleware 1...')
    //next()
})

app.get('/produtos/::id',(req,res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
   // res.send({nome:'Notebook', preco: 123.00})
})

app.post('/produtos',(req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id',(req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id',(req, res, next) =>{
    const produto = bancoDeDados.ExcluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () =>{
  //  console.log(`Servidor executando na porta ${porta}`)
})

