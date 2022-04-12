const express = require ('express')
const bodyParser = require ('body-parser')

const app = express()

app.use(bodyParser.urlencoded ({extended:true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/imcCalculator.html")
})

app.post("/", (req, res) => {
    let weight = Number(req.body.weight)
    let height = Number(req.body.height)
    let squarenumber = Math.pow(height,2)
    let result = weight/squarenumber

    res.send("L'IMC est calculé à : " + result)
})

app.listen(3001, () => {
    console.log("Le serveur a demarré sur le port 3001, http://localhost:3001");
})