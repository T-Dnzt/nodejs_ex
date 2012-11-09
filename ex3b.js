var http = require("http");
var t0 = new Date().getTime();

var options = {
    method: 'GET',
    host: 'search.twitter.com',
    path: '/search.json?q=node'
};

var callback = function(res) {

	console.log("Response: " + res.statusCode)

	res.on('end', function(e){
		var t1 = new Date().getTime() - t0;
		console.log("Delay : " + t1 + "ms")
	})
}; 


var req = http.request(options, callback);
req.end();