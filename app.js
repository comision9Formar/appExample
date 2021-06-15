const express = require('express');
const app = express();
const port = 3030;


app.get('/',(req,res) => res.send('bienvenidos a mi sitio web'))

app.listen(port,() => console.log('Servidor corriendo en http://localhost:' + port))