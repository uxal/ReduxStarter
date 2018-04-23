import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import Dotenv from 'dotenv-webpack';

let pathToEnvFile = './.env.production';
if (process.env.NODE_ENV === 'production') {
  pathToEnvFile = './.env.production';
}

module.exports = {
  mode: 'development',
  entry: {
    entry: ['babel-polyfill',
      './src/index.js']
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: [
          path.resolve(__dirname, '../node_modules'),
        ],
        loader: 'babel-loader',
        options: {
          presets: [
            ['env'],
            ['stage-0'],
            ['react'],
          ],
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64:5]",
              camelCase: true,
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new Dotenv({
      path: pathToEnvFile,
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      title: 'React app',
      template: path.resolve(__dirname, './src/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}