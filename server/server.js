var path = require('path');
var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

app.use(bodyParser.json())

app.use(express.static('/Users/JasperYu/coding/projects/Lunar/'));

var grabCoin = {
  url: 'https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=1MIN&time_start=2016-01-01T00:00:00',
  headers: {
    "X-CoinAPI-Key": "4C327C09-42B4-48B0-A983-AB58F9472FD7"
  }
};

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



app.get('/getHistoricalData', function(req, res) {
	console.log('hi');
	request(grabCoin, function(error, body, response) {
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
