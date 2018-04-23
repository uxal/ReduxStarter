import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import Dotenv from 'dotenv-webpack';

let pathToEnvFile = './.env.production';
if (process.env.NODE_ENV === 'production') {
  pathToEnvFile = './.env.production';
}

const extractSass = new ExtractTextPlugin({
  filename: "styles.css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['babel-polyfill', 'react'],
    app: './src/index.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: true,
        },
      }
    },
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
        use: extractSass.extract({
          use: [{
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
          }],
          fallback: "style-loader"
        })
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
    extractSass,
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
    new UglifyJsPlugin({
      test: 'app.bundle.[hash].js',
    })
  ],
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  }
}