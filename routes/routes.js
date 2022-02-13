"use strict";

module.exports = function (app) {
    //Import routes
    const postRoutes = require("./postRoutes");
    const contactRoutes = require("./contactRoutes")

    // Groupe routes
    const routes = [
        postRoutes,
        contactRoutes
    ]

    //Use
    app.use(routes)
};
