var express = require('express');
const path = require('path');


var aplicacao = express();

const rotas = require('./routes/router');
const bd_artigos = require('./database/artigos.js');

const bodyParser = require('body-parser');



aplicacao.use(express.json());

aplicacao.use('/', rotas);

aplicacao.use(bodyParser.urlencoded({extended:false}));

aplicacao.use(express.static(__dirname +'/public'))

aplicacao.set('view engine', 'ejs');

// Configurando o diretório de uploads usando o módulo path
const multer = require('multer');

const upload = multer({ dest: path.join(__dirname, 'public/uploads') });
aplicacao.use(upload.single('imagem'));




aplicacao.post('/postar', function(req,res){
    console.log("### Enviando artigo para o banco de dados")

    const artigo = {
        autor : req.body.autor,
        titulo : req.body.titulo,
        texto : req.body.artigo,
        imagem : req.file ? req.file.filename : 'default.jpeg',
    }

    console.log(artigo)

    bd_artigos.create({
        autor: artigo.autor,
        titulo: artigo.titulo,
        texto: artigo.texto,
        imagem: artigo.imagem
    }).then(function(){
        console.log("### Artigo cadastrado no banco de dados");
        res.render('../views/index.ejs')
    }).catch(function(error){
        console.log("Erro ao cadastrar artigo no banco" + error);
        res.status(500).send('Erro ao cadastrar artigo no banco de dados')
    })
})


aplicacao.get('/blogViews', function(req,res){
    console.log("Coletando artigos cadastrados")

    bd_artigos.findAll({
        attributes: ['id', 'autor', 'titulo', 'texto', 'imagem']
    }).then(artigos => {
        const all_id = artigos.map(artigos => artigos.id);
        const all_autor = artigos.map(artigos => artigos.autor);
        const all_titulo = artigos.map(artigos => artigos.titulo);
        const all_texto = artigos.map(artigos => artigos.texto);
        const all_imagem = artigos.map(artigos => artigos.imagem)
        // console.log(all_id)
        // console.log(all_autor)
        // console.log(all_titulo)
        // console.log(all_texto)

        res.render('../views/blogViews.ejs', {id : all_id, autor : all_autor, titulo : all_titulo, texto : all_texto, imagem: all_imagem})
    })
})

const port = process.env.PORT || 3000;

aplicacao.listen(port, "0.0.0.0", function(){
    console.log("### Aplicacao aberta ###")
})