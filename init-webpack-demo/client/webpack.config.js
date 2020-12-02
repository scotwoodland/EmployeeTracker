const path = require('path');

module.exports = {
    entry: "./src/assets/js/index.js",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./src",
        open: true,
    },
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, 'src', 'assets', 'bundle')
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env"]
                  }
              }  
            }
        ]
    }
};