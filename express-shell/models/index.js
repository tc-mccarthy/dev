/* LINKS CONTROLLERS TO ROUTES FOR FULL MVC STRUCTURE */

var models = {
    user: require(__dirname + "/user.js").model,
    // organization: require(__dirname + "/organization.js").model,
    // lobbyist: require(__dirname + "/lobbyist.js").model,
    // coalition: require(__dirname + "/coalition.js").model,
    // campaign: require(__dirname + "/campaign.js").model,
};

exports.models = models;