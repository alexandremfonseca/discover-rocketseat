const express = require('express')
const axios = require('axios')
const app = express()

app.listen('3000')

// HTTP

// GET
app.route('/').get((req,res) => "Hello!")

// POST
app.use(express.json())
app.route('/').post((req, res) => res.send(req.body))

// PUT
let author = "Alexandre Fonseca"

app.use(express.json())
app.route('/').put((req,res) => {
    author = req.body.author
    res.send(author)
})

// DELETE
app.route('/:identificador').delete((req,res) => {
    res.send(req.params.identificador)
})

// Parâmetros

// BODY
app.route('/').post((req,res) => {
    const {nome, cidade} = req.body
    res.send(`Meu nome é ${nome} e moro em ${cidade}!`)
})

// ROUTE
app.route('/').get((req,res) => res.send("Olá!"))
app.route('/:variable').get((req,res) => res.send(req.params.variable))
app.route('/identidade/:nome').get((req,res) => res.send(req.params.nome))

// QUERY
app.route('/').get((req,res) => res.send(req.query.nome))
app.route('/about/user').get((req,res) => res.send(req.query))

// Consumindo APIs

// Axios
app.route('/').get((req,res) => {
    axios.get('https://api.github.com/users/alexandremfonseca')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})