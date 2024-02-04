// controllers/usuarioController.js
const Noticias = require('../model/noticiasModel');
const db = require('../databases/connection') //vetor que simula um banco de dados.

const usuarioController = {

    home: (req, res) =>{
        res.render('index.js')
    },
    listarNoticias: (req, res) => {
        db.select("*").table("autenticacao_noticia")
            .then(noticia => {
                console.log(noticia);
                res.json({ noticias: noticia });
                //res.render('listarNoticias', {noticias:noticia});
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ error: 'Erro ao obter notícias.' }); // Adicionado tratamento de erro
            });
    },      
    criarNoticia: (req, res) => {
        const { titulo, autor, texto, legenda, categoria } = req.body;
        let data_e_hora = new Date()
        let id_funcionario_id = 1
        // Criando uma instância da classe Noticias
        const noticia = new Noticias(titulo, autor, texto, legenda, categoria, data_e_hora, id_funcionario_id);

        // Inserindo os dados no banco de dados
        db.insert(noticia).table("autenticacao_noticia").then(data => {
            console.log(data);
            res.json({ message: 'Notícia salva com sucesso!' });
        }).catch(error => {
            console.log(error);
            res.status(500).json({ error: 'Erro ao salvar a notícia' });
        });
    },
    editarNoticia: (req, res)=>{
        const id = req.params
        const { titulo, autor, texto, legenda, categoria, data_e_hora } = req.body;
        let id_funcionario_id = 1

        const noticia = new Noticias(titulo, autor, texto, legenda, categoria, data_e_hora, id_funcionario_id);

        db('autenticacao_noticia').where({ id: id.id })
            .update({
                titulo: noticia.titulo,
                autor: noticia.autor,
                texto: noticia.texto,
                legenda: noticia.legenda,
                categoria: noticia.categoria,
                data_e_hora: noticia.data_e_hora,
                id_funcionario_id: noticia.id_funcionario_id
            }).then(data => {
                console.log(data);
                res.json({ message: "Notícia atualizada com sucesso!" });
            }).catch(error => {
                console.error(error);
                res.status(500).json({ error: 'Erro ao atualizar a notícia' });
            });
    },
    deletarNoticia: (req, res) =>{
        const id = req.params
        db.where({id:id.id}).del().table("autenticacao_noticia").then(data => {
            res.json({message:"Noticia removida"})
        }).catch(error => {
            res.json(error)
        })
    },
    //Controllers de VIEWS
    formEditarNoticia:(req, res)=>{
        const id = req.params
        console.log(id)
        db.select("*").table("noticias").where({id:id.id}).then(noticia=>{
            console.log(noticia)
            res.render('editarNoticia',{noticia})
        }).catch(error=>{
            console.log(error)
        })
    },
    formDeletarNoticia:(req, res)=>{
        const id = req.params
        console.log(id)
        db.select("*").table("noticias").where({id:id.id}).then(noticia=>{
            console.log(noticia)
            res.render('deletarNoticias',{noticia})
        }).catch(error=>{
            console.log(error)
        })
    },
    formCadastro:(req, res)=>{
        res.render('cadastroNoticia')
    }
}
module.exports = usuarioController;

