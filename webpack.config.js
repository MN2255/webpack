const pathModule = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:"production",
    entry:{
        main : pathModule.resolve(__dirname, './src/index.js')
    },
    output:{
        filename:"main.js",
        path:pathModule.resolve(__dirname,"dist"),
        
    }, 
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
      },
      plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: './src/index.html',
      })],
}