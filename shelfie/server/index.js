
const express = require('express');
const ctrl = require('./controller');
const gradient = require('gradient-string');

const app = express();
app.use(express.json());

const PORT = 3456

app.listen(PORT, () => console.log(gradient.pastel(`Smooth sailing on ${PORT}`)))
