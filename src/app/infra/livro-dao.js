class LivroDao {
    constructor(db){
        this._db = db;
    }

    lista(){

        return new Promise((resolve,reject)=>{
            this._db.all('SELECT * FROM livros; ',(erro,resultados)=>{
                    if(erro) return reject('Não foi Possível listar os livros!');
                    return resolve(resultados);
                }
            )
        });  
    }

    adiciona(livro){
        return new Promise((resolve,reject)=>{
            this._db.run(
                `INSERT INTO livros (titulo, preco, descricao) values (?,?,?)`,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                (erro)=>{
                    if(erro){
                        console.log(erro);
                        return reject('Não foi possível adicionar o livro');
                    }
                    resolve();
                }
            )
        });
    }

    buscaPorId(id){
        return new Promise((resolve,reject)=>{
            this._db.get(
                `SELECT * FROM livros WHERE id = ?`,
                [id],
                (erro, result)=>{
                    if(erro) return reject('Não foi possivel buscar por id');
                    return resolve(result);
                }
            )
        });
    }

    atualiza(livro){
        return new Promise((resolve,reject)=>{
            this._db.run(
                `UPDATE livros
                 SET 
                    titulo = ?,
                    preco = ?,
                    descricao = ?
                WHERE
                   id = ?`,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao,
                    livro.id
                ],
                erro => {
                    if(erro){ 
                        return reject('não foi possivel atualizar registro');
                    }
                    return resolve();
                }
            )
        });
    }

    remove(id){
        return new Promise((resolve, reject)=>{
            this._db.run(
                `DELETE FROM livros
                WHERE id = ?`,
                [id],
                erro => {
                    if(erro){
                        return reject('Não foi Possivel remover o livro')
                    }
                    return resolve();
                }
            )
        });
    }
}

module.exports = LivroDao;