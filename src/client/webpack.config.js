const path = require("path");
// const HtmlWebPackPlugin = require("html-webpack-plugin");

const config =  {
	entry: {
		app: ['@babel/polyfill','./src/index.js'],
	},
	mode:"production",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	// output: {
	// 	filename: '[name].bundle.js',
	// 	chunkFilename: '[name].bundles.js',
	// 	path: path.resolve(__dirname, 'dist'),
	// },
	// plugins: [
	// 	new HtmlWebPackPlugin({
	// 		template: "./src/index.html",
	// 		filename: "index.html"
	// 	}),
	// ]
};

const client = Object.assign({}, config, {
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundles.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		host:"localhost",
		port:8000,
		contentBase: "./dist"
	}
});

const root = Object.assign({}, config, {
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundles.js',
		path: path.resolve(__dirname, '../wwwroot/dist'),
	},
});




module.exports = [client,root]