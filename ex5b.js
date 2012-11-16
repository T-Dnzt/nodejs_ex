var http = require("http");
var t0 = new Date().getTime();

var options1 = { method: 'GET', host: 'search.twitter.com', path: '/search.json?q=node'};
var options2 = { method: 'GET', host: 'search.twitter.com', path: '/search.json?q=perl'};
var options3 = { method: 'GET', host: 'search.twitter.com', path: '/search.json?q=mojolicious'};



var t1 = new Date().getTime();


var callback = function(res) {
  console.log("Response: " + res.statusCode)
  var t2 = new Date().getTime() - t1
  console.log("Timer : " + t2 + "ms")
}; 



http.request(options1, callback).end();
http.request(options2, callback).end();
http.request(options3, callback).end();

