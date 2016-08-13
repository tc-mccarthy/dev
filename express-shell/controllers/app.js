var request = require("request"),
    async = require("async"),
    moment = require("moment"),
    util = require("util"),
    _ = require("lodash");

var app = {

    main: function(req, res, next) {
        res.render('index', {
            title: 'Express'
        });
    }
};

exports.app = app;