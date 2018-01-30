/* LINKS CONTROLLERS TO ROUTES FOR FULL MVC STRUCTURE */

var controllers = {
    app: require(__dirname + "/app.js").app,
    api: require(__dirname + "/api.js").api,
};

exports.controllers = controllers;