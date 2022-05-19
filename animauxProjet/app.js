const  MongoClient = require('mongodb').MongoClient
const assert = require ('assert')


const url = 'mongodb://localhost:27017'

const dbName = 'animauxDB'

const client = new MongoClient(url)

client.connect((err) => {
    assert.equal(null, err)
    console.log("La connexion au serveur est un succès");

    const db = client.db(dbName)
        client.close()

})
