const path = require('path');

const env = process.env;

module.exports = {
	entry: './src/main.ts',
	target: 'node',
	module: {
		rules: [{
			test: /\.ts$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'ts-loader'
				}
			]
		}]
	},
	resolve: {
		extensions: ['.ts']
	},
	plugins: [],
	externals: [],
	node: {
		__filename: false,
		__dirname: false
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		// clean: true, //开启以后每次构建都会清空dist
		libraryTarget: 'commonjs2',
		devtoolModuleFilenameTemplate: '../[resource-path]'
	}
}