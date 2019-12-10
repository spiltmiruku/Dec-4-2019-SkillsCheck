require('dotenv').config();
const express = require('express');
const ctrl = require('./controller'),
	gradient = require('gradient-string'),
	massive = require('massive'),
	dotenv = require('dotenv');
const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();
app.use(express.json());

const PORT = 3456;

//ENDPOINTS

app.get('/api/products', ctrl.getProducts);
app.post('/api/products', ctrl.newProduct);
app.put('/api/products', ctrl.edit);
app.delete('/api/products/:id', ctrl.delete);

// Connect to database
massive(CONNECTION_STRING)
	.then((db) => {
		app.set('db', db);
		app.listen(SERVER_PORT, () => console.log(gradient.teen(`DB Cooper taking flight on ${SERVER_PORT}`)));
	})
	.catch((err) => console.log(err, `Can't connect to the database`));

app.listen(PORT, () => console.log(gradient.pastel(`Smooth sailing on ${PORT}`)));
