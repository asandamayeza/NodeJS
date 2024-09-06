"use strict";
//6.5 adding functions to the module's exports object in router.js
const httpStatus = require("http-status-codes");
const htmlContentType = {
    "Content-Type": "text/html"
};

const routes = { //define route object to store routes mapped to post and get requests
    "GET": {
        "/info": (req, res) => {
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/plain"
            })
            res.end("Welcome to the Info Page!")
        }
    },
    'POST': {}
};

exports.handle = (req, res) => {//function (handle) to process route callback functions
    try {
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
            res.end("<h1>No such file exists</h1>");
        }
    } catch (ex) {
        console.log("error: " + ex);
    }
};
exports.get = (url, action) => {//get and post functions to register routes from main.js
    routes["GET"][url] = action;
};
exports.post = (url, action) => {
    routes["POST"][url] = action;
};