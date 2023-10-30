const express = require("express")
const exphbs = require("express-handlebars");
const path = require('path')

require("./database/index");

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true}))

// Importar as rotas
const thoughtRoutes = require("./routes/thoughtsRoutes");
const usersRoutes = require("./routes/usersRoutes");

// Importando engine handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


app.set("views", path.join(__dirname, "views/"))

app.use(express.static(__dirname + '/public'))

exphbs.create({
    partialDir: path.join(__dirname, "views/partials")
})

app.use(thoughtRoutes);
app.use(usersRoutes);


app.listen(3333, console.log("Servidor rodando na porta 3333"))