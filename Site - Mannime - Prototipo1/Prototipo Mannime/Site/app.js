process.env.AMBIENTE_PROCESSO = "desenvolvimento";

var express = require("express");
var cors = require("cors");
var path = require("path");

var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var usuarioRouter = require("./src/routes/usuario");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use("/usuario", usuarioRouter);


app.listen(PORTA, function () {
    console.log(`Mannime esta no ar! Acesse: http://localhost:${PORTA} \n
    rodando em Ambiente de ${process.env.AMBIENTE_PROCESSO}'`);
});

