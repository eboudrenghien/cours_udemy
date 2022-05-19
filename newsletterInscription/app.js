const express = require ('express')
const bodyParser = require ('body-parser')
const request = require ('request')
const dotenv = require ('dotenv')
const https = require ('https')

dotenv.config()
const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/inscription.html");
})

app.post('/', (req, res) => {
    const nom = req.body.nom
    const prenom = req.body.prenom
    const email = req.body.email

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: prenom,
                    LNAME: nom
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data)
    const url = process.env.apiNewsletter
    const option = {
        method: "POST",
        auth: "eboudrenghien:259515e2c26d301df61d52e71e6f5d29-us14"
    }

    const request = https.request(url, option, (response) => {

        if(response.statusCode === 200) {
            res.sendFile(__dirname + "/succes.html")
        } else {
            res.sendFile(__dirname + "/echec.html")
            
        }
       response.on("data", (data) => {
           console.log(JSON.parse(data));
       })
    })
    request.write(jsonData)
    request.end()
})

app.post('/echec', (req, res) =>{
    res.redirect('/')
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Le serveur fonctionne sur le port http://localhost:3000");
})