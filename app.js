const express = require("express")
const rotaLivro = require("./rotas/livro")
const app = express()

const port = 8000
app.use(express.json())

app.use('/livro', rotaLivro)
app.patch('/livro/:id', rotaLivro)

app.listen(port,() =>{
    console.log(`escutando a porta ${port}`)
})