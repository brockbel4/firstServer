var http = require('http');
var goodPORT = 7000;
var badPORT = 7500;
var goodHams = ['Hamza can be helpful... Sometimes...', 'Blue shirt', 'compliment', 'Ham this is hard to think about', 'You are that cool'];
var chosenHam;


function handleGoodRequest(request, response){
        var i = Math.floor(Math.random() * 4);
        chosenHam = goodHams[i];
        response.end(chosenHam);
        console.log(chosenHam);
        console.log('Bacon');
}

var goodServer = http.createServer(handleGoodRequest);

goodServer.listen(goodPORT, function(){
    console.log('Hamza can be helpful... Sometimes...');
});

function handleBadRequest(request, response){
    response.end('That one time Hamza was late to class...');
}

var badServer = http.createServer(handleBadRequest);

badServer.listen(badPORT, function(){
    console.log('That one, time Hamza was late to class...');
});