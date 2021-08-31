const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// 入口
	entry: './src/index.js',
	// 输出
	output: {
		// 输出的文件名
		filename: 'built.js',
		// 输出的文件路径
		path: resolve(__dirname, 'build')
	},
	// loader配置
	module:{
		rules:[
			{
				test: /\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.less$/,
				use:[
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test:/\.(png|jpg|gif)$/,
				loader:'url-loader',
				options:{
					limit: 8 * 1024
				}
			}
		]
	},
	// 插件
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		})
	],
	// 打包模式
	mode:'development'  //开发模式
	// mode:'production'   //生产模式
}