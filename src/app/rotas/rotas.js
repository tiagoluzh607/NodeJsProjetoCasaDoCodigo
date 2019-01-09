module.exports = (app) => {

    app.get('/', function (req, resp) {
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

    app.get('/livros', function (req, resp) {
        resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros:[
                    {id: 1, titulo: 'Fundamentos do Node'},
                    {id: 2, titulo: 'Node Avançado'}
                ]
            }
        );
    });

    app.get('/clientes', (req, resp)=>{
        resp.marko(
            require('../views/clientes/lista/cliente.marko'),
            {
                clientes: [
                    {id: 1, nome: 'Avatar'},
                    {id: 2, nome: 'Katara'}
                ]
            }
        );
    })
}