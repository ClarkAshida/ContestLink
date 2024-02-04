const express = require('express')
const cors = require('cors')
const noticiasRoutes = require('./routes/noticiasRoutes')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/noticias', noticiasRoutes)

app.get('/', (req, res) => {
    res.render('index')
})
  
app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`)
})