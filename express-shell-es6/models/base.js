var request = require("request"),
	async = require("promise-async"),
	moment = require("moment"),
	util = require("util"),
	_ = require("lodash"),
	Promise = require("bluebird"),
	config = require(__dirname + "/../config.js").config,
	db = require(__dirname + "/../lib/db.js").db;

var Base = function (table) {
	this.table = table;

	this.find = function (x) {
		return new Promise((resolve, reject) => {
			var data = {
				table: this.table,
				where: x.where,
				columns: x.columns,
				limit: 1
			};

			db.get(data, function (results, err) {
				if (err) {
					reject(err);
				} else {
					resolve(results[0]);
				}
			});
		});
	};

	this.findAll = function (x) {
		return new Promise((resolve, reject) => {
			var data = {
				table: this.table,
				where: x.where,
				columns: x.columns,
			};

			db.get(data, function (results, err) {
				if (err) {
					reject(err);
				} else {
					resolve(results);
				}
			});
		});
	};

	this.create = function (x) {
		return new Promise((resolve, reject) => {
			var data = {
				table: this.table,
				data: x
			};

			db.insert(data, function (results, err) {
				if (err) {
					reject(err);
				} else {
					resolve(results);
				}
			});
		})
	};

	this.upsert = function (x) {
		return new Promise((resolve, reject) => {
			var data = {
				table: this.table,
				data: x
			};

			db.upsert(data, function (results, err) {
				if (err) {
					reject(err);
				} else {
					resolve(results);
				}
			});
		});
	};

	this.update = function (x, cb) {
		return new Promise((resolve, reject) => {
			var data = {
				table: this.table,
				data: x.data,
				where: x.where
			};

			db.update(data, function (results, err) {
				if (err) {
					reject(err);
				} else {
					resolve(results);
				}
			});
		});
	};

	this.delete = function (id) {
		return new Promise((resolve, reject) => {
			var data = {
				table: this.table,
				data: {
					is_active: 0
				},
				where: {
					id: id
				}
			};

			db.update(data, function (results, err) {
				if (err) {
					reject(err);
				} else {
					resolve(results);
				}
			});
		});
	};

	this.findOrCreate = function (where, vals) {
		return new Promise((resolve, reject) => {
			this.findAll({
				where: where,
				columns: ["*"]
			}).then((results) => {
				if (results.length === 0) {
					return resolve({
						status: "found",
						data: data
					});
				} else {
					return this.create(vals);
				}
			}).then((results) => {
				return this.find({
					where: [{
						col: "id",
						op: "=",
						val: results.insertId
					}],
					columns: ["*"]
				});
			}).then((results) => {
				return resolve({
					status: "created",
					data: data
				})
			}).catch((error) {
				return reject(error);
			});
		});
	};
};

exports.Base = Base;
