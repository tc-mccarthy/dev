var request = require("request"),
    async = require("async"),
    moment = require("moment"),
    util = require("util"),
    _ = require("lodash"),

    config = require(__dirname + "/../config.js").config,
    db = require(__dirname + "/../lib/db.js").db,
    models = require(__dirname + "/../models/index.js").models;

var api = {

    main: function(req, res, next) {
        var obj = {
            message: "API running!",
            timestamp: moment().format("YYYY-MM-DD hh:mm:ss")
        };

        res.send(JSON.stringify(obj));
    },

    dbGetTest: function(req, res, next) {
        db.get({
            columns: ["*"],
            table: "offenders",
            where: [{
                col: "is_active",
                op: "=",
                val: 1
            }],
            group: ["state_id"],
            order: [{
                col: "last_name",
                sort: "ASC"
            }],
            limit: 10,
            offset: 10
        }, function(results) {
            res.send(JSON.stringify(results));
        });
    },

    dbUpsertTest: function(req, res, next) {
        db.upsert({
            table: "offenders",
            data: {
                slug: "scott-atkinson-33053",
                is_active: 1
            }
        }, function(results) {
            res.send(JSON.stringify(results));
        });
    },

    modelGetTest: function(req, res, next) {
        models.user.find({
            where: [{
                col: "id",
                op: "=",
                val: 1
            }],
            columns: ["*"]
        }, function(results) {
            res.send(JSON.stringify(results));
        });
    },

    modelCreateTest: function(req, res, next) {
        models.user.create({
                first_name: "TC",
                last_name: "McCarthy",
                slug: db.slugify(["TC", "McCarthy"].join(" ")),
                profile: "This is a test"
            },
            function(results) {
                res.send(JSON.stringify(results));
            });
    },


};

exports.api = api;