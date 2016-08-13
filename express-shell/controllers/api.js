var request = require("request"),
    async = require("async"),
    moment = require("moment"),
    util = require("util"),
    _ = require("lodash");

var api = {

    main: function(req, res, next) {
        var obj = {
            message: "API running!",
            timestamp: moment().format("YYYY-MM-DD hh:mm:ss")
        };

        res.send(JSON.stringify(obj));
    }
};

exports.api = api;