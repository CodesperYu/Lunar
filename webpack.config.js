var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './client/js/app.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	test: /\.(pdf|jpg|png|gif|svg|ico)$/,
	use: [
			{
					loader: 'url-loader'
			},
	],
	stats: {
		colors: true
	},
	devtool: 'source-map'
};