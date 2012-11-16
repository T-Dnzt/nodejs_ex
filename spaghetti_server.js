var http = require("http");
var fs = require("fs");


var httpServer = http.createServer(function(request, response) {
    fs.readFile(__dirname + "/index.html", "utf8", function(error, content) {
        response.writeHeader(200, {"Content-Type": "text/html"});

        response.end(content);
    });
}).listen(process.env.PORT || 1337);

var io = require("./socket.io").listen(httpServer);




io.sockets.on("connection", function(socket) {

  var socketOn = function(onId, timer) {
     socket.on(onId, function(callback) {
       setTimeout(callback, timer);      
    });
  };

  var randomize = function(min, max) {
    
  }


  socketOn("fillWater", 100);
  socketOn("addSalt", 100);
  socketOn("boilWater", 9000);
  socketOn("tomatoes", 1000);
  socketOn("prepareSoffrito", 1500);
  socketOn("warmSoffrito", 5000);
  socketOn("addPasta", 100);
  socketOn("addIngredients", 200);
  socketOn("cookPastaAldente", 6000);
  socketOn("cookPastaWellCook", 7000);
  socketOn("tastePasta", 100);
  socketOn("emptyWater", 100);
  socketOn("cheese", 200);





});