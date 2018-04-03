/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: ['./src/index'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                loader: 'less-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    externals: {
        'react-router-dom': 'ReactRouterDOM',
        'react-dom': "ReactDOM",
        'react': "React",
        'antd': 'antd'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: '0.0.0.0',
        port: 8000,
        contentBase: path.resolve(__dirname, 'public'),
        disableHostCheck: true,
        hot: true
    }
};
//# sourceMappingURL=webpack.config.js.map