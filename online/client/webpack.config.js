const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	devtool: "source-map",	
	mode: 'development',
	entry: __dirname + '/src/js/sketch.js',
	output: {
		path: __dirname + '/dist/',
		publicPath: '/',
		filename: 'js/sketch.js'
	},
	devServer: {
		inline: true,
		hot: true,
		port: 3333,
		compress: false
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-env']
				}
			},
			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader"
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([{
				from: 'src/index.html',
				to: 'index.html'
			},
			{
				from: 'src/assets',
				to: 'assets'
			},
			{
				from: 'src/imgs',
				to: 'imgs'
			},
			
			{
				from: 'src/js',
				to: 'js'
			},
			{
				from: 'src/runes',
				to: 'runes'
			}
		])
	]
}