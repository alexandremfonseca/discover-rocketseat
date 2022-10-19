const express = require('express')
const app = express()

app.listen('3000')

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