const path=require('path');
const HtlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
	entry:{
		app:[
			"@babel/polyfill",
			'./src/app/index.js'
		]
	},
	output:{
	path:path.resolve(__dirname,'build'),
	filename:'js/app.bundle.js'
	},
	devServer:{
		port:7447
	},
	module:{
		rules:[
			{
				test: /\.js$/,
				loader:'babel-loader'
			},
			{
				test:/\.css$/,
				use:[
				MiniCssExtractPlugin.loader,
				'css-loader'
				]
			}
		]
	},
	plugins:[
		new HtlWebpackPlugin({
		template:'./src/index.html',
		minify:{
			collapseWhitespace:true,
			removeComments:true,
			removeRedundantAttributes:true,
			removeScriptTypeAttributes:true,
			removeStyleLinkTypeAttributes:true,
			useShortDoctype:true
		}
	}),
	new MiniCssExtractPlugin({
		filename:'c