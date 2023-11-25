// dados.js

var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/buscar", function (req, res) {
    quizController.buscarDados(req, res);
});

module.exports = router;



