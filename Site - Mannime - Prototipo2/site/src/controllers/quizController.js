var quizModel = require("../models/quizModel")

function calcular(){
    var ponto = req.body.scoreServer;
    var acore = req.body.answersServer;
    var idUser = req.bode.idServer;

    quizModel.calcular(ponto, acore, idUser)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

module.exports = {
    calcular
}
