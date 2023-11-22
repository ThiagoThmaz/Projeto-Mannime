var database = require("../database/config")

function calcular(ponto, acore, idUser){
    var instrucao = ` INSERT INTO quiz (pontos, acore, fkCadastro) VALUES 
    ('${ponto}','${acore}','${idUser}');`;
}

module.exports = {
    calcular
}