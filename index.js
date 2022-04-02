const express = require('express');
const conectarDB = require('./config/db')


//creacion del servidor
const app = express();

//conectar a la base de datos
conectarDB();

app.use(express.json());

//cuando el usuario digite...

app.use('/api/productos', require('./routes/producto'));


app.listen(4000, () => {
    console.log('el servidor está corriendo perfectamente')
})