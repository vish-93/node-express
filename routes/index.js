'use strict';

const fs = require('fs');

let getRoutes = (app) => new Promise((resolve, reject) => {
    const isTesting = process.env.NODE_ENV === 'testing';
    let routes = {};

    fs.readdir('./routes', (err, files) => {
        for (let file of files) {
            if (file === 'index.js') {
                continue;
            }
            const routePath = `./${file}/index.js`;
            routes = { ...routes, ...require(routePath)(app, isTesting) };
        }

        return resolve(routes);
    });
});

module.exports = async (app) => {
    return await getRoutes(app);
};
