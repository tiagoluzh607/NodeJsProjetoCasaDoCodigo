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

        const livroDao = new LivroDao(db);
        
        livroDao.adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));    
    })

    app.put('/livros', (req,resp)=>{
        console.log(req.body);

        const livroDao = new LivroDao(db);
        
        livroDao.atualiza(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));    
    })

    app.delete('/livros/:id',(req,resp)=>{
        const id = req.params.id;

        const livroDao = new LivroDao(db);

        livroDao.remove(id)
            .then(() => resp.status(200).end())
            .catch(erro => console.log(erro));
    });

    app.get('/livros/form',(req, resp)=>{
        resp.marko(
            require('../views/livros/form/form.marko'),
            {livro: {} }//passandolivro vazio para nao quebra o template por causa da edição
        );
    })

    app.get('/livros/form/:id',(req, resp)=>{
        const id = req.params.id;
        const livroDao = new LivroDao(db);

        livroDao.buscaPorId(id)
            .then((livro)=>{
                resp.marko(
                    require('../views/livros/form/form.marko'),
                    { livro: livro}
                )
            })
            .catch( erro => console.log(erro));
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