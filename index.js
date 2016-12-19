const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 8000;

const bodyParser = require('body-parser');


const root = __dirname.replace("urban-art-server","urban-art-ionic")+"/www"

const api = require('./modules/api').api;

app
	.use(express.static(root))
	.use(bodyParser.urlencoded({extended: true}))
	.use(bodyParser.json())

app
	.get('/works', api.get)
	.post('/works', api.add)
	.delete('/:id', api.delete )
	.getCategory('/categories', api.getCategory)

server.listen(port, ()=>{
	console.log("Listnening on port " + port)
});

