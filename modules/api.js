const mongoose = require('mongoose');

const Work = require('./mongo').Work
const Category = require('./mongo').Category
const Artist = require('./mongo').Artist
const User = require('./mongo').User
const fs = require("fs");
/* MAC */
//const root = __dirname.replace("urban-art-server/modules","urban-art-ionic")+"/www"
const imagesPath = __dirname.replace("/modules","") + "/img/";

//const imagesPath = root + "/assets/images/works/";
mongoose.connect('mongodb://test:test@ds055782.mlab.com:55782/urban', (err) => {
	if (err) {return console.error("Error connecting to MongoDB!");}
});

/* Windows configuraton 
const root = __dirname.replace("urban-art-server\modules","urban-art-ionic") + "\www";
const imagesPath = root + "\assets\images\works\\";
*/
const api = {
	get : (req,res) => {
		Work.find((err, docs) => {
			if(err) return console.log(err);
			res.json(docs);
		})
	},
	delete : (req,res) => {
		Work.findByIdAndRemove(req.params.id,  (err, doc) => {
			if(err) return console.log(err);
			res.json(doc);
		})
	},
	add : (req,res) =>{

		console.log("Saving work to DB");

		(new Work(req.body)).save((err, doc) => {
			if(err) return console.log(err);
			console.log("Saved work to DB", doc);
			res.json(doc);
		})
	},
	getCategory : (req,res) => {
		Category.find((err, docs) => {
			if(err) return console.log(err);
			res.json(docs);
		})
	},
	getArtist : (req,res) => {
		Artist.find((err, docs) => {
			if(err) return console.log(err);
			res.json(docs);
		})
	},
	getUser : (req,res) => {
		User.find((err, docs) => {
			if(err) return console.log(err);
			res.json(docs);
		})
	},
	addUser : (req,res) =>{

		console.log("Saving user to DB");

		(new User(req.body)).save((err, doc) => {
			if(err) return console.log(err);
			console.log("Saved user to DB", doc);
			res.json(doc);
		})
	},
	saveImage : (req, res) => {
		console.log("api : saving image to " + imagesPath, req.body.imgData)
		fs.writeFile( imagesPath + req.body.imgName + ".jpeg", req.body.imgData, "base64" , () => {
			res.end()
		})
	}
}

module.exports = {
	api
}
