var request = require("request"),
    async = require("async"),
    moment = require("moment"),
    util = require("util"),
    _ = require("lodash"),
    config = require(__dirname + "/../config.js").config,
    mysql = require("mysql"),
    db = mysql.createConnection(config.mysql);

db.connect(function(err) {
    if (err) {
        console.log("Could not connect to db: ", err);
    }
});


var database = {
    tables: {},

    slugify: function(str) {
        var slug = str.trim().replace(/[^A-Za-z0-9]+/g, "-").toLowerCase();

        return slug;
    },

    columnize: function(cols) {
        var c = [];

        _.each(cols, function(col) {
            if (typeof col === "string") {
                c.push(util.format("`%s`", col));
            }
        });

        return c;
    },

    log: function(query, err) {
        if (config.mysql.logging) {
            console.log("Error running query:", query)
            console.log(err);
        }
    },

    get: function(options, cb) {
        // adjust for no where property
        if (typeof options.where === "undefined") {
            options.where = []
        }

        // adjust for no group property
        if (typeof options.group === "undefined") {
            options.group = []
        }

        // adjust for no order property
        if (typeof options.order === "undefined") {
            options.order = []
        }

        // begin the query
        var sql = [
            "SELECT %s",
            "FROM %s"
        ];

        // begin where clause, if defined
        if (options.where.length > 0) {
            _.each(options.where, function(clause, key) {
                var statement = "WHERE";
                if (key > 0) {
                    statement = "AND"
                }

                sql.push(util.format("%s %s %s '%s'", statement, clause.col, clause.op, clause.val));
            });
        }

        // begin group clause, if defined
        if (options.group.length > 0) {
            sql.push("GROUP BY " + options.group.join(", "));
        }

        // begin order clause, if defined
        if (options.order.length > 0) {
            var order = [];

            _.each(options.order, function(clause, key) {
                order.push(util.format("%s %s", clause.col, clause.sort));
            });

            sql.push("ORDER BY " + order.join(", "));
        }

        // begin limit clause, if defined
        if (typeof options.limit !== "undefined" && options.limit) {
            sql.push(util.format("LIMIT %s", options.limit));
        }

        // begin offset clause, if defined
        if (typeof options.offset !== "undefined" && options.offset) {
            sql.push(util.format("OFFSET %s", options.offset));
        }

        sql = util.format(sql.join(" "), options.columns.join(", "), options.table);

        this.query(sql, cb);
    },

    upsert: function(options, cb) {
        var cols = Object.keys(options.data),
            cols_formatted = this.columnize(cols),
            vals = [],
            update = [],
            sql = [
                "INSERT INTO %s (%s)",
                "VALUES(%s)",
                "ON DUPLICATE KEY UPDATE %s"
            ];

        _.each(cols, function(col, key) {
            vals.push(util.format("'%s'", options.data[col]));
            update.push(util.format("%s=VALUES(%s)", cols_formatted[key], col));
        });

        sql = util.format(sql.join(" "), options.table, cols_formatted, vals.join(", "), update.join(", "));

        console.log(sql);

        this.query(sql, cb)
    },

    query: function(query, cb) {
        var _this = this;

        db.query(query, function(err, rows, fields) {
            if (err) {
                _this.log(query, err);
            }

            cb(rows);
        });
    }
};

exports.db = database;