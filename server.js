var graphql = require('graphql').graphql;
var Schema = require("./schema.js").Schema;
var http = require("http");
var url = require('url');
http.createServer((req, res)=>{
    var query = url.parse(req.url, true);
    console.log("Query:", query.query);
    graphql(Schema, `${query.query.query}`).then(result=>{
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(result));
        res.end();
    }).catch(err=>{
        console.log(err);
    });
}).listen(4000);
console.log("Server running");