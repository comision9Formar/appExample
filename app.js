const express = require('express');
const app = express();
const port = 3031;
const path = require('path');

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/contact',(req,res) => res.sendFile(path.join(__dirname,'views','contact.html')));
app.get('/about',(req,res) => res.sendFile(path.join(__dirname,'views','about.html')));

app.listen(port,() => console.log('Servidor corriendo en http://localhost:' + port))