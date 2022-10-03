const express = require('express')
const app = express()
const port = process.env.PORT || 8000
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/assets', express.static(__dirname + '/assets'))

require('./src/controllers/UserController')(app);


app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})