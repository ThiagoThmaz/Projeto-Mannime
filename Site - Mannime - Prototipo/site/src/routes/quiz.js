var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController")

router.post("/calcular", function (req, res){
    quizController.calcular(req, res);
})

module.exports = router;