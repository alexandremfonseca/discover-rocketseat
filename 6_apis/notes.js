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