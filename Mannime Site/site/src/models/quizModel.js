var database = require("../database/config")

function calcular(ponto, acore, idUser){
    var instrucao = ` INSERT INTO quiz (pontos, acore, fkCadastro) VALUES 
    ('${ponto}','${acore}',${idUser});`;
    return database.executar(instrucao)
}

function buscarDados(ponto, idUser){
    var instrucao = `Select * From quiz;`
    return database.executar(instrucao)
}

module.exports = {
    calcular,
    buscarDados
}

