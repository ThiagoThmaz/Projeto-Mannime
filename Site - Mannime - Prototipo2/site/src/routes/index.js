var express = require("express");
var router = express.Router();

router.get("/cadastrar", function (req, res) {
    res.render("index");
});

module.exports = router;