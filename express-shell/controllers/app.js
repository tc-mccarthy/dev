var request = require("request"),
    async = require("async"),
    moment = require("moment"),
    util = require("util"),
    _ = require("lodash"),
    models = require(__dirname + "/../models/index.js").models.autoLoad();

var app = {

    main: function(req, res, next) {
        res.render('index', {
            title: 'Express'
        });
    }
};

exports.app = app;