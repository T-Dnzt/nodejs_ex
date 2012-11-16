var http = require("http");
var t0 = new Date().getTime();

var options1 = { method: 'GET', host: 'search.twitter.com', path: '/search.json?q=node'};
var options2 = { method: 'GET', host: 'search.twitter.com', path: '/search.json?q=perl'};
var options3 = { method: 'GET', host: 'search.twitter.com', path: '/search.json?q=mojolicious'};

var t1 = new Date().getTime();

var callback1 = function(res) {
  res.on('end', function(e){
    var req = http.request(options2, callback2).end();
  })
}; 

var callback2 = function(res) {
  res.on('end', function(e){
    var req = http.request(options3, callback3).end();
  })
}; 


var callback3 = function(res) {
  res.on('end', function(e){
    var t2 = new Date().getTime() - t1;
    console.log("Delay : " + t2 + "ms")
  })
}


var req = http.request(options1, callback1);
req.end();