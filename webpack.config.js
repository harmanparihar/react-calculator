const path = require("path");
const webpack =require("webpack");
module.exports ={
  entry: './js/index.js',
  output: {path: './', filename: 'webpack_bundle.js'},
  module:{
    loaders:[
      { test: /\.css$/,
           loader: "style-loader!css-loader"
      },
      {
        test: /.jsx?$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        }
      },
    ]
  }
};
