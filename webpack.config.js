/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        use: [
          {
            loader: 'babel-loader',
            //options: {
              //presets: ["react"],
              //plugins: [["import", { libraryName: "antd", style: 'css' }]]
            //},
          },
          'awesome-typescript-loader',
        ]
      },
      {
        test: /\.less$/,
        loader: 'less-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
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
    'bizcharts': 'BizCharts',
    'moment': 'moment',
    'antd': 'antd',
    'highcharts': 'Highcharts'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    contentBase: path.resolve(__dirname, 'public'),
    disableHostCheck: true,
    // historyApiFallback: true,
    hot: true
  }
}
