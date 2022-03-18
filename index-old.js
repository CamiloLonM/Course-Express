// copia 

const http = require('http');

http.createServer( (req ,res)  => {     // es un coolback que s edispara con la req( requisito) y res(respuesta)
    
    
    // res.writeHead(200, { 'content-type': 'text/plain' });                         //respond header un archivo de texto 
    // res.writeHead(200, { 'content-type': 'application/json' }); 
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');       // Descarga un archivo de siguiente tipo con dicho nombre
    // res.writeHead(200, { 'Content-Type': 'application/csv'});                     // Descarga un archivo de respuesta que o se reconoce
    // res.write(JSON.stringify( person ) )                                           // Se pone el JSON.stringify para cambiarle la extencion al text

    res.write( 'Hola Mundo' );
        
    res.end();                                          // finaliza la req para mostrar

})
.listen( 8080) ;

console.log('Escuchando el puerto', 8080); 