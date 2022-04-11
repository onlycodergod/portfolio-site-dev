const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require('./base.js');
const {pathes} = require('./constants.js');

module.exports = merge(base, {
    mode: 'development',
    output: {
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        port: 8000,
        host: 'localhost',
        compress: true,
        hot: true,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: false,
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({template: pathes.html}),
        new MiniCssExtractPlugin(),
    ],
});
