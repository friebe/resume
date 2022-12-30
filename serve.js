var http = require("http");
var fs = require('fs');

var port = 8888;
http.createServer(async function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(await render());
    }
}).listen(port);

console.log(`Preview: http://localhost:${port}`);
console.log("Serving..");

async function render() {
    return await require("./index.js").render();
}