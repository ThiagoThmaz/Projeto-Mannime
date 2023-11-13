var mysql = require("mssql");

var mySqlConfig = {
    host: "localhost: 3306",
    database: "Mannime",
    user: "root",
    password: "root"
};

function cadastrar(instrucao) {
if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        return new Promise(function (resolve, reject) {
            var conexao = mysql.createConnection(mySqlConfig);
            conexao.connect();
            conexao.query(instrucao, function (erro, resultados) {
                conexao.end();
                if (erro) {
                    reject(erro);
                }
                console.log(resultados);
                resolve(resultados);
            });
            conexao.on('error', function (erro) {
                return ("ERRO NO MySQL WORKBENCH: ", erro.sqlMessage);
            });
        });
    } else {
        return new Promise(function (resolve, reject) {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            reject("AMBIENTE NÃO CONFIGURADO EM app.js")
        });
    }
}

module.exports = {
    cadastrar
}