const express = require ('express')
const bodyParser = require ('body-parser')
const request = require ('request')
const https = require ('https')

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
    const url = "https://us14.api.mailchimp.com/3.0/lists/379ebf7534"
    const option = {
        method: "POST",
        auth: "eboudrenghien:259515e2c26d301df61d52e71e6f5d29-us14"
    }

    https.request(url, options, (response) => {
       response.on("data", (data) => {
           console.log(JSON.parse(data));
       } )
    })
})

// API Key
// 259515e2c26d301df61d52e71e6f5d29-us14

// List ID
// 379ebf7534
app.listen(3000, () => {
    console.log("Le serveur fonctionne sur le port http://localhost:3000");
})