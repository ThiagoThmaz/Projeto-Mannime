var quizModel = require("../models/quizModel");

function calcular(req, res) {
    var ponto = req.body.scoreServer;
    var acore = req.body.answersServer;
    var idUser = req.body.idServer;

    quizModel.calcular(ponto, acore, idUser)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.error(erro);
            console.error("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarDados(req, res){
    var ponto = req.body.scoreServer;
    var idUser = req.body.idServer;

    quizModel.buscarDados(ponto, idUser)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.error(erro);
            console.error("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    calcular,
    buscarDados
};

