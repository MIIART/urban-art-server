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

const Work = mongoose.model('work', workSchema); // work est un modèle Mongoose.
												 // 'work' indique à Mongoose d'utiliser la collection 'works'
mongoose.connect('mongodb://localhost/urban', (err) => {
	if (err) {return console.error("Error connecting to MongoDB!");}
});

module.exports = {
	Work
}