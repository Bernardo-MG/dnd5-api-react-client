var path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Environment profile
const env = process.env.NODE_ENV || 'development';

// Project version
const PROJECT_VERSION = process.env.APP_VERSION || '';

// Project URL
const PROJECT_REPO_URL = process.env.REPO_URL;

// Input directory
const INPUT_PATH = process.env.INPUT_PATH;
const INPUT_PATH_ENTRY = INPUT_PATH + 'index.js';

const OUTPUT_PATH = process.env.OUTPUT_PATH;

// Modules dependencies directory
const MODULE_PATH = process.env.MODULE_PATH;

// Plugins
let plugins = [
   new webpack.optimize.OccurrenceOrderPlugin(),
   new webpack.DefinePlugin({
      APP_VERSION : JSON.stringify(PROJECT_VERSION),
      REPO_URL : JSON.stringify(PROJECT_REPO_URL)
   }),
   new CopyWebpackPlugin([
      {
         from: 'index'
      }
  ])
]

module.exports = {
   context : __dirname,
   entry: {
      app: INPUT_PATH_ENTRY,
   },
   cache : true,
   optimization: {
      splitChunks: {
         cacheGroups: {
            commons: {
               chunks: "initial",
               minChunks: 2,
               maxInitialRequests: 5, // The default limit is too small to showcase the effect
               minSize: 0 // This is example is too small to create commons chunks
            },
            vendor: {
               test: /node_modules/,
               chunks: "initial",
               name: "vendor",
               priority: 10,
               enforce: true
            }
         }
      }
   },
   output: {
      path: path.join(__dirname, OUTPUT_PATH),
      filename: "[name].js"
   },
   resolve : {
      extensions : [ '.scss', '.css', '.js', '.json' ],
      modules : [
         'src',
         path.resolve(__dirname, INPUT_PATH),
         'node_modules',
         path.resolve(__dirname, MODULE_PATH)
      ]
   },
   module : {
      rules : [
            {
               test : /(\.js)$/,
               exclude: /node_modules/,
               use: ['babel-loader', 'eslint-loader']
            },
            {
               test : /\.(css|scss)$/,
               exclude: /node_modules/,
               use: [
                  {
                     loader: 'file-loader',
                     options: {
                        name: '[name].css'
                     }
                  },
                  {
                     loader: 'sass-loader',
                     options: {
                        includePaths : [ path.resolve(__dirname, MODULE_PATH) ]
                     }
                  }
               ]
            } ]
   },
   plugins
};
