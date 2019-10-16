var webpack = require("webpack")

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var path = require('path')

process.noDeprecation = true

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js",],
    output: {
        path: path.join(__dirname, "dist/assets"),
        filename: "bundle.js",
        publicPath: "assets",
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 6690,
        stats: 'errors-only',
        watchContentBase: true,
        open: true,
        clientLogLevel: 'error',
        proxy: {
            '/api': {
                target: 'http://192.168.5.4:9402',
                changeOrigin: true
            }
        }
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [
                        /* ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }], */
                        // Stage 2
                        ["@babel/plugin-proposal-decorators", { legacy: true }],
                        "@babel/plugin-proposal-function-sent",
                        "@babel/plugin-proposal-export-namespace-from",
                        "@babel/plugin-proposal-numeric-separator",
                        "@babel/plugin-proposal-throw-expressions",

                        // Stage 3
                        "@babel/plugin-syntax-dynamic-import",
                        "@babel/plugin-syntax-import-meta",
                        ["@babel/plugin-proposal-class-properties", { loose: false }],
                        "@babel/plugin-proposal-json-strings",
                    ],
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000',
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css",
            chunkFilename: "[id].css"
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
        'moment': 'moment',
        'antd': 'antd',
        'echarts': 'echarts'
    }
}