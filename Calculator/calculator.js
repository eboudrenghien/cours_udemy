// Problème rencontré : le serveur nodemon ne s'est pas déclenché, solution trouvé : installation express.
const express = require ('express');
const bodyParser = require ('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)

    let result = num1 * num2

    res.send("le résultat de la somme est : " + result)
})

app.get("/imcCalculator", (req, res) => {
    res.sendFile(__dirname + "/imcCalculator.html")
})

app.post("/imcCalculator", (req, res) => {
    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)
    let squarenumber = Math.pow(height,2)
    let imc = weight/squarenumber

    res.send("L'IMC est calculé à : " + imc)
})

app.listen(3000, () => {
    console.log("Le serveur démarre sur le port 3000 http://localhost:3000 ou http://localhost:3000/imcCalculator")
})

