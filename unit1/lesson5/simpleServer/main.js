// const port = 3000;
// const http = require("http");
// const httpStatus = require("http-status-codes");
// const app = http.createServer();
/*****************5.1 A simple server with a request event listener in main.js*********************** */
// app.on("request", (req, res) => { //Listen for requests.
//     res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"

//     }); //Prepare a response
//     let responseMessage = "<h1>This will show on the screen.</h1>";
//     res.end(responseMessage);
// });
// app.listen(port);
// console.log(`The server has started and is listening on port number: ➥ ${port}`);


/*************5.3 Logging request data in main.js******************* */
// const getJSONString = obj => {
//     return JSON.stringify(obj, null, 2); //Convert JavaScript object to string.
// };

// /******************5.4Handling posted request data in main.js******************** */
// app.on("request", (req, res) => {
//     let body = [];
//     req.on("data", (bodyData) => {
//         body.push(bodyData);
//     });
//     req.on("end", () => {
//         body = Buffer.concat(body).toString();
//         console.log(`Request Body Contents: ${body}`);
//     });
//     console.log(`Method: ${getJSONString(req.method)}`);
//     console.log(`URL: ${getJSONString(req.url)}`);
//     console.log(`Headers: ${getJSONString(req.headers)}`);
//     res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"
//     });
//     let responseMessage = "<h1>This will show on the screen.</h1>";
//     res.end(responseMessage);
// });
// app.listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);


/***************5.5 simple server in main.js********************** */
// const port = 3000;
// const http = require("http");
// const httpStatus = require("http-status-codes");
// const app = http.createServer((req, res) => {
//             res.writeHead(httpStatus.OK, {
//                 "Content-Type": "text/html"
//             });
//             let responseMessage = "<h1>Welcome!</h1>";
//             res.end(responseMessage);
//         })
//         .listen(port);



/******************5.6********************** */
const routeResponseMap = { //define mapping of routes with responses
    "/": "<h1>Welcome</h1>",
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us.</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Sorry the page you are looking for is not here.</h1>"



};

const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const app = http.createServer((req, res) => {
        console.log("URL IS: ", req.url); //Only if you want the information to be displayed in terminal
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        if (routeResponseMap[req.url]) {
            res.end(routeResponseMap[req.url]);
            // setTimeout(() => res.end(routeResponseMap[req.url]), 2000);
        } else {
            res.end("<h1>Page does not exist</h1>");
        }
    });
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);

