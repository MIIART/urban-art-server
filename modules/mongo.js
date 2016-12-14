const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
    photos: [String],
    title : String,
    datePosted: Date,
    address: String,
	pos : {
		type: [Number],  // [<longitude>, <latitude>]
    	index: '2d'      // create the geospatial index
	},    
    description: String,
    idCat: Number,
    artists: [String]
});

/*
db.getCollection('works').insert({
        photos: ["graf-1.jpg"],
        title : "Deep sea blue",
        datePosted: new Date(),
        address: "place des augustins, Genève",
        pos:[6.144571, 46.191814],
        description: "A beautiful work",
        idCat: 0,
        artists: ["wertucuhkjhjfa"],
    })

db.getCollection('works').insert({
        photos: ["graf-2.jpg"],
        title : "Bienvenu au coin",
        datePosted: new Date(),
        address: "Place de Bel-Air, Genève",
        pos:[6.143171, 46.204366],
        description: "Another beautiful work",
        idCat: 0,
        artists: ["wertucuhkjhjfa"],
    })
*/

const Work = mongoose.model('work', workSchema); // work est un modèle Mongoose.
												 // 'work' indique à Mongoose d'utiliser la collection 'works'

// mongoose.connect('mongodb://localhost/urban', (err) => {
mongoose.connect('mongodb://test:test@ds055782.mlab.com:55782/urban', (err) => {
	if (err) {return console.error("Error connecting to MongoDB!");}
});

module.exports = {
	Work
}