var express = require('express'),
    router = express.Router(),
    c = require(__dirname + "/../controllers/index.js").controllers;

/* GET home page. */
router.get('/', c.api.main);

module.exports = router;