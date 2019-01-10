const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');


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

        const livroDao = new LivroDao(db);
        
        livroDao.lista()
            .then(resultados => resp.marko(
                    require('../views/livros/lista/lista.marko'),
                    {
                        livros:resultados
                    }
                )
            )
            .catch(erro => console.log(erro));
        
    });

    app.post('/livros', (req,resp)=>{
        console.log(req.body);
    })

    app.get('/livros/form',(req, resp)=>{
        resp.marko(
            require('../views/livros/form/form.marko')
        );
    })

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