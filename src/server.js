const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/connection');

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

//rotas
app.get('/', (req, res) => {
    return res.render('index');
});

app.listen(3030, () => {

    console.log('Server Running')
  
});