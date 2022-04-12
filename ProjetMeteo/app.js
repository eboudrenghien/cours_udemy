const { response } = require('express')
const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const {StringDecoder} = require ('string_decoder')
const decoder = new StringDecoder("utf-8")



const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + "/index.html")

})

app.post("/", (req, res) => {


    const query = req.body.cityName
    const apiKey = "66176401dc6eaa95ed6c0ba531721412"
    const unit = "metric"
    const lang = "fr"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit + "&lang=" + lang + ""
    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on('data', (data) => {
            const meteodata = JSON.parse(data)
            const temp = meteodata.main.temp
            const meteoDescription = meteodata.weather[0].description
            const icon = meteodata.weather[0].icon
            const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>La temp&eacute;rature de " + query + " est " + temp + " &deg;C</h1>")
            res.write("<p>La météo annonce un " + meteoDescription + "<p>")
            res.write("<img src=" + imageUrl + ">")


            res.send()
        })
    })


})

app.listen(3000, () => {
    console.log("Le serveur démarre sur le port 3000 http://localhost:3000")
})