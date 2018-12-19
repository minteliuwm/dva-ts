'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
	entry: {
		app: './src/main.tsx'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			loaders: 'ts-loader',
			exclude: /node_modules/,
			options: {
				transpileOnly: true,
				getCustomTransformers: () => ({
					before: [tsImportPluginFactory({
						libraryDirectory: 'es',
						libraryName: 'antd',
						style: 'css',
					})]
				}),
				compilerOptions: {
					module: 'es2015'
				}
			}
		}, {
			test: /\.js|jsx$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader'
		}, {
			test: /\.scss$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "sass-loader"
			}]
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url-loader',
			query: {
				limit: 30000,
				name: 'images/[name].[ext]?[hash]'
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: "url-loader",
			options: {
				limit: 10000,
				name: 'font/[name].[ext]?[hash]'
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'
		})
	]
};
