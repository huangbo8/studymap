const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 打包后的文件名和路径
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build'),
        // publicPath: ''
    },
    // loader配置
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 8 * 24,
                esModule: false,
                name: '[hash:10].[ext]'
            }
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    // 插件
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    // development开发模式，production生产模式
    mode: 'development',

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
        open: true



    }
}