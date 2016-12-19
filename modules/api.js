
const Work = require('./mongo').Work
const Category = require('./mongo').Category

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
		(new Work(req.body)).save((err, doc) => {
			if(err) return console.log(err);
			res.json(doc);
		})
	},
	getCategory : (req,res) => {
		Category.find((err, docs) => {
			if(err) return console.log(err);
			res.json(docs);
		})
	}	
}

module.exports = {
	api
}
