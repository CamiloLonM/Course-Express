require('dotenv').config();         // Busca por mi si el puerto ya esta configurado
const express = require('express');
const hbs = require('hbs');         // Reenderizar vistas sencillas

const app = express();
const port = process.env.PORT ;     // Puerto donde se desplegue


// Handlebars
app.set('view engine', 'hbs');
// Partials 
hbs.registerPartials(__dirname + '/views/partials', );

//  Path Servir Contenido Estático
app.use(express.static('public') );            //  ( 'nombre de la carpeta' ) 


// app.get('/', function (req, res) {         // ('/' ) Aca defino la Ruta / se puede con arrow o sin el 
//   res.send('Home Page')
// });
// app.get('*',  (req, res)  => {             // ' * ' comodin para disparar un error de mensaje si no encuentra la ruta
//   res.send('404 | Page not found ');
// });


// app.get('/Home', (req, res) => {                  // ('/') Aca defino la Ruta
//   res.send(__dirname + '/public/index.html');
// });

app.get('/', (req, res) => {     
  res.render('home', {
    name: 'Camilo londoño',
    title: 'Curso-Node'
  });

});

app.get('/generic', (req, res) => {     
  res.render('generic',  {
    title: 'Generic'
  });
});

app.get('/elements', (req, res) => {     
  res.render('elements', {
    title: 'Elements'
  });
});

app.get('/generic', (req, res) => {        
  res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {        
  res.sendFile(__dirname + '/public/elements.html');
});

// app.get('*',  (req, res)  => {                              // ' * ' comodin para disparar un error de mensaje si no encuentra la ruta
//   res.sendFile( __dirname + '/public/404.html');            // senFile Mandar algo que se encuentre en una ruta
// });

app.listen(port, () => {                                     // Puerto de escucha
  console.log(`Example app listening on port ${port}`)
});


