const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// process.env.NODE_ENV = 'development'

module.exports = {
	// 入口文件
	entry: './src/index.js',
	// 多入口
	// entry:{
	// 	index:'./src/index.js',
	// 	test:'./src/test.js'
	// },
	// 打包后的文件名和路径
	output: {
		// [name]输出后的文件用文件名 
		filename: 'js/[name].[contenthash:10].js',
		path: path.resolve(__dirname, 'build'),
		// publicPath: ''
	},
	// loader配置
	module: {
		rules: [{
			oneOf: [{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										'postcss-preset-env',
										{
											// 其他选项
										},
									],
								],
							},
						},
					},
				],
			}, {
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader'
				]
			}, {
				test: /\.(jpg|png|gif)$/,
				loader: 'url-loader',
				options: {
					limit: 8 * 24,
					esModule: false,
					name: '[contenthash:10].[ext]'
				}
			}, {
				test: /\.html$/,
				loader: 'html-loader'
			}, {
				test: /\.js$/,
				exclude: /node_module/,
				use: [
					// 开启多进程打包。
					'thread-loader',
					{
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										useBuiltIns: 'usage',
										corejs: {
											version: 3,
										},
										targets: {
											chrome: '60',
											firefox: '60',
											ie: 9,
											safari: '10',
											edge: '17'
										}
									}
								]
							],
							//　开启babel缓存
							cacheDirectory: true
						}
					}
				],

			}]
		}]
	},
	// 插件
	plugins: [
		// 自动生成一个html文件
		new htmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: true,
				keepClosingSlash: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		}),
		// 把css代码抽取到css文件
		new MiniCssExtractPlugin({
			filename: 'css/built.[contenthash:10].css'
		}),
		// 压缩css
		new OptimizeCssAssetsPlugin()
	],
	// development开发模式，production生产模式
	mode: 'development',

	optimization: {
		splitChunks: {
			chunks: 'all'
		}

	},

	devServer: {
		// 指定打包的文件
		static: {
			directory: path.join(__dirname, 'build')
		},
		// 以压缩文件的方式进行打包
		compress: true,
		// 指定端口号
		port: 3000,
		// 自动打开浏览器
		open: true,
		// 开启HMR热重载
		hot: true
	},
	devtool: 'eval-source-map'
}