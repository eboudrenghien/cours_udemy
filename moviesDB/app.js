// pilote natif de mongoDB

const mongoose = require ('mongoose')
mongoose.connect("mongodb://localhost:27017/moviesDB", 
    {useNewUrlParser: true})

const movieSchema = new mongoose.Schema({
    name: String,
    score: Number,
    avis: String
})

const Movie = mongoose.model("Movie", movieSchema)
const movie = new Movie ({
    name : "Le seigneur des anneaux - trilogie - version longue",
    score : 10,
    avis : "Une incroyable trilogie que je recommande pour ceux qui aime tout ce qui est fantastique."
})

// movie.save()

const HarryPotter = new Movie ({
    name : "Harry Potter - La coupe de feu",
    score : 9.5,
    avis : "Ce film nous fait passer par toutes les émotions"
})

const Totoro = new Movie ({
    name: "Totoro",
    score: 3,
    avis : "Tellement, on m'a parlé de ce film, que je me suis lassée. Je m'attendais à un truc de dingue, mais au final non. L'histoire est prévisible."
})

const Chihiro = new Movie ({
    name : "Le voyage de Chihiro",
    score: 8.5,
    avis: "Le voyage de Chihiro nous emporte loin, que ce soit niveau émotions, imagination. Je conseille ce film."
})
const Troie = new Movie ({
    name: "Troie",
    score: 7,
    avis: "C'est un film intéressant, basée sur l'Histoire réel de Troie. Elle raconte également l'Histoire d'Achille."
})

const Alexandre = new Movie ({
    name: "Alexandre",
    score: 7,
    avis: "Alexandre est un beau film historique, un peu violent par contre."
})

// Movie.insertMany([HarryPotter, Totoro, Chihiro, Troie, Alexandre], (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("La sauvegarde des films dans la base de donnée MoviesDB a été un succès");
//     }
// })

Movie.find((err, movies) => {
    if (err) {
        console.log(err);
    } else {

        mongoose.connection.close()
        // console.log(movies);
        movies.forEach((movie) => {
            console.log(movie.name);
        })
    }
})
const findDocuments = (db, callback) => {
    const collection = db.collection('movies')
    collection.find({}).toArray((err, movies) => {
        assert.equal(err, null)
        console.log("It's good !")
        console.log(movies);
        callback(movies)
    })
}






    // const insertDocuments = (db, callback) => {
    //     const collection = db.collection('movies')
    //     collection.insertMany([
    //         {
    //             name: "Le seigneur des anneaux - trilogie - version longue",
    //             score: 10/10,
    //             avis : "Une trilogie sublime, drôle."
            
    //         }, 
    //         {
    //             name: "Harry Potter - La coupe de feu",
    //             score: 9.5/10,
    //             avis : "Ce film nous fait passer par toutes les émotions"
            
    //         }, 
    //         {
    //             name: "Totoro",
    //             score: 3/10,
    //             avis : "Tellement, on m'a parlé de ce film, que je me suis lassée. Je m'attendais à un truc de dingue, mais au final non. L'histoire est prévisible."
            
    //         },
    //         {
    //             name: "Le voyage de Chihiro",
    //             score: 8.5/10,
    //             avis: "Le voyage de Chihiro nous emporte loin, que ce soit niveau émotions, imagination. Je conseille ce film."
    //         }
    //     ], ((err, result) => {
    //         assert.equal(err, null) // cette commande permet de savoir si il n'y a pas d'erreurs lors de l'insertion des documents.
    //         assert.equal(4,result.insertedCount);
    //         assert.equal(4,Object.keys(result.insertedIds).length);
    //         console.log("insertion de 4 documents dans la collection");
    //         callback(result)
    //     }))
    // }

