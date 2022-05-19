const MongoClient = require ('mongodb').MongoClient
const assert = require ('assert')

const url = 'mongodb://localhost:27017'
const dbName = 'familyDB'

const client = new MongoClient (url)
    client.connect((err) => {
        assert.equal(null, err)
        console.log("La connexion au serveur a été réalisé avec succès");
        const db = client.db(dbName)

        insertDocuments(db, function () {
            client.close()
        })
    })

    const insertDocuments = (db, callback) => {
        const collection = db.collection('family')
        collection.insertMany([
            {
                Name: "Alain",
                Role: "Papa",
                Age: 77
            },
            {
                Name: "Anne",
                Role: "Maman",
                Age: 71
            },
            {
                Name: "Emmanuel",
                Role: "Frère",
                Age: 38
            },
            {
                Name: "Marie-Pilar",
                Role: "Soeur",
                Age: 34
            },
            {
                Name: "Esther",
                Role: "Moi",
                Age: 29
            },

        ], ((err, result) => {
                assert.equal(err,null)
                assert.equal(5, result.insertedCount)
                assert.equal(5, Object.keys(result.insertedIds).length)
                console.log("Insertion de 5 documents dans la collection family");
                callback(result)
        }))
    }