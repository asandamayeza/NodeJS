const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
// const router = require("./router");
const fs = require("fs");

// /**************6.2 Using the fs module in server responses in main.js************* */
// const routeMap = { //Set up route mapping for HTML files.
//     "/": "views/index.html"
// };
// http.createServer((req, res) => {
//     res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"

//     });
//     if (routeMap[req.url]) {
//         fs.readFile(routeMap[req.url], (error, data) => { //Read the contents of the mapped file.
//             res.write(data);//respond with file content
//             res.end();
//         });
//     } else {

//         res.end("<h1>Sorry, not found.</h1>");
//     }
// })
//     .listen(port);
// console.log(`The server has started and is listening ➥ on port number: ${port}`);


/***********6.3  *********** */
// const getViewUrl = (url) => {//function to interpolate the url into the file path
//     return `views${url}.html`;
// };
// http.createServer((req, res) => {//Get the file-path string.
//     let viewUrl = getViewUrl(req.url);
//     fs.readFile(viewUrl, (error, data) => {  //Interpolate the request URL into your fs file search.
//         if (error) {//Handle errors with a 404 response code.
//             res.writeHead(httpStatus.NOT_FOUND);
//             res.write("<h1>FILE NOT FOUND</h1>");
//         } else { // Respond with file contents.
//             res.writeHead(httpStatus.OK, {
//                 "Content-Type": "text/html"
//             });
//             res.write(data);
//         }
//         res.end();
//     });
// })
//     .listen(port);
// console.log(`The server has started and is listening on port number: ➥ ${port}`);

/***************6.4 a web sever with a specific routes for each file in project*******/
const sendErrorResponse = res => { //error handling function
    res.writeHead(httpStatus.NOT_FOUND, {
        "Content-Type": "text/html"
    });
    res.write("<h1>File Not Found!</h1>");
    res.end();
}
http.createServer((req, res) => {
    let url = req.url;//store the req url in a var url
    if (url.indexOf(".html") !== -1) {//if the file is an html file
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });
        customReadFile(`./views${url}`, res);//responds with index html
    } else if (url.indexOf(".js") !== -1) {//js file
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/javascript"
        });
        customReadFile(`./public/js${url}`, res);//test.js
    } else if (url.indexOf(".css") !== -1) {//css file
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/css"
        });
        customReadFile(`./public/css${url}`, res);//test.css
    } else if (url.indexOf(".png") !== -1) {//png file
        res.writeHead(httpStatus.OK, {
            "Content-Type": "image/png"
        });
        customReadFile(`./public/images${url}`, res);//test.png
    } else {
        sendErrorResponse(res);//error message
    }
})
    .listen(port);
console.log(`The server is listening on port number: ${port}`);

const customReadFile = (file_path, res) => {//look for a file by name requested
    if (fs.existsSync(file_path)) {//check whether file exists
        fs.readFile(file_path, (error, data) => {
            if (error) {
                console.log(error);
                sendErrorResponse(res);
                return;
            }
            res.write(data);
            res.end();
        });
    } else {
        sendErrorResponse(res);
    }
};

//6.6 handling and managing your router in main.js
// const plainTextContentType = {
//     "Content-Type": "text/plain"
// };
// const htmlContentType = {
//     "Content-Type": "text/html"
// };
// const customReadFile = (file, res) => {
//     fs.readFile(`./${file}`, (errors, data) => {
//         if (errors) {
//             console.log("Error reading the file...");
//         }
//         res.end(data);
//     });
// };
// router.get("/", (req, res) => {
//     res.writeHead(httpStatusCodes.OK, plainTextContentType);
//     res.end("INDEX");
// });
// router.get("/index.html", (req, res) => {
//     res.writeHead(httpStatusCodes.OK, htmlContentType);
//     customReadFile("views/index.html", res);
// });
// router.post("/", (req, res) => {
//     res.writeHead(httpStatusCodes.OK, plainTextContentType);
//     res.end("POSTED");
// });
// http.createServer(router.handle).listen(3000);
// console.log(`The server is listening on port number: ➥ ${port}`);