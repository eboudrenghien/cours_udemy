//jshint esversion:6

const express = require ('express');
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Bienvenue sur Express</h1>");
    
});

app.get("/contact", (req, res) => {
    res.send("e.boudrenghien@codeur.online");
});

app.get("/about", (req, res) => {
    res.send("<p>Je m'appelle Actii, j'ai 28 ans, je suis en formation dans le développement web, plus précisément sur JavaScript</p>");
});

app.get("/hobbies", (req, res) => {
    res.send("<ul><li>Mon chat</li> <li>Ma famille</li> <li>Le seigneur des anneaux</li></ul>");
});

app.listen(3000, () => {
    console.log("Le serveur fonctionne sur le port 3000");
});