const app = require('./src/config/custom-express');

app.listen(3000, function(){
    console.log(`Servidor Rodando na Porta 3000`);
});

app.get('/', function(req, resp){
    resp.send(`
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            <h1> Casa do Código </h1>
        </body>
    </html>
    `);
});

app.get('/livros', function(req, resp){
    resp.send(`
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            <h1> Listagem de Livros </h1>
        </body>
    </html>
    `);
});

/*
const http = require('http');

const servidor = http.createServer(function(req,resp){
    resp.end(`
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body>
        </html>
    
    `);
});
servidor.listen(3000);

*/