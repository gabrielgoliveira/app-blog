//import libs
const express = require('express');
const bodyParser = require('body-parser');

//imports bd
const connection = require('./database/connection');

//imports routes
const categoriesRouter = require('./routes/CategoriesRouter');
const articlesRouter = require('./routes/ArticlesRouter');

const app = express();

//Setando EJS como view engine e a localização da pasta views
app.set('view engine', 'ejs');
app.set('views', 'src/views')

//setando que o server reconheça a estrutura json
app.use(express.json());

//setando public como pasta que ira conter os arquivos estaticos    
app.use(express.static('src/public'));

//configurando o body parser
app.use(bodyParser.urlencoded({extended: false}));

//testando conexão com o banco de dados
connection
    .authenticate()
    .then(() => {
        console.log('Connection with a DB sucessful');
    })
    .catch((error) => {
        console.log('Error Connection DB: ' + error);
    });


//setando arquivos de rota
app.use(categoriesRouter);
app.use(articlesRouter);

//rotas
app.get('/', (req, res) => {
    return res.render('index');
});

app.listen(3030, () => {
    console.log('Server Running')
});