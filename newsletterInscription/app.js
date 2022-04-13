const express = require ('express')
const bodyParser = require ('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/inscription.html");
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/success.html");
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/fail.html");
})

app.listen(3000, () => {
    console.log("Le serveur démarre sur le port http://localhost:3000");
})