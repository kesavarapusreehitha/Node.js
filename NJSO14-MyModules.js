var http = require ("http");
var dt= require("./myModule");
http.createServer(function(req,res) {
    // Set the response header
    res.writeHead(200,{'Content-Type': 'text/html'});
    // Use the custom module to get the date and time 
    res.write("The date and time is currently in  : "+dt.myDateTime());
    // End the response
    res.end();
}).listen(8000);