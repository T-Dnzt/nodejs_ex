var http = require("http");
var d1 = new Date().getTime();

http.get("http://search.twitter.com/search.json?q=node", function(res) {
    console.log("Got response: " + res.statusCode); 
  }).on('close', function() {
    var d2 = new Date().getTime() - d1;
    console.log("Delay : " + d2 + " ms");
});
