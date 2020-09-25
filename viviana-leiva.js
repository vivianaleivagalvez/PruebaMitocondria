let express = require('express');
let bodyParser = require( 'body-parser' );
let http = require('http');
let app = express();
let port = process.env.PORT || 3000;
let host = process.env.HOST || 'localhost';

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
//app.use( bodyParser.json({type: 'application/json'}) );
//to show views under app folder
app.use(express.static(__dirname + "/src"));

http.createServer(app).listen(port, host, function () {
    console.log(port);
});