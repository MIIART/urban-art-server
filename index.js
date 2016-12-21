const express = require('express');
const cors = require('cors')
const app = express();
const server = require('http').createServer(app);
const port = 8000;

const bodyParser = require('body-parser');


const api = require('./modules/api').api;
const root = __dirname.replace("urban-art-server","urban-art-ionic")+"/www" // MAC
//const root = __dirname.replace("urban-art-server","urban-art-ionic")+"\www" // windows


const log = (req,res,next) => {
	console.log("Route post /images reached: ", root);
	next();
}

app
	.use(express.static(root))
	.use(bodyParser.urlencoded({extended: true}))
	.use(bodyParser.json())
	.use(express.static('img'))
	.use(cors());

app
	.get('/works', api.get)
	.post('/works', api.add)
	.post('/images', log, api.saveImage)
	.delete('/:id', api.delete )
	.get('/categories', api.getCategory )
	.get('/artists', api.getArtist )
	



server.listen(port, ()=>{
	console.log("Listnening on port " + port)
});

