var path = require('path');
var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

app.use(bodyParser.json())

app.use(express.static('/Users/JasperYu/coding/projects/Lunar/'));

app.get('/getCoins', function(req, res) {
	console.log('hi');
	request('https://api.coinmarketcap.com/v1/ticker/', function(error, body, response) {
		if (error) {
			console.log('error ):');
		} else {
			var coin = response;
			console.log(coin);
			res.send(coin);
		}
	});
})
// app.get('*', function (req, res) {
// 	res.sendFile('./index.html');
// });

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
