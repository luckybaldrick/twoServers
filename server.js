var http = require("http");

var PORTgood = 7000; 
var PORTbad = 7500;

function handleRequest1(request, response) {
response.end("You are pretty cool! " + request.url);
}

function handleRequest2(request, response) {
response.end("You are pretty cool! " + request.url);
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORTgood, function() {
    console.log("Server listening on: http://localhost:" + PORTgood + ". Something good about you!");
});

server2.listen(PORTbad, function() {
    console.log("Server listening on: http://localhost:" + PORTbad + ". Something bad about you!");
});
