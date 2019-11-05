const path = require('path') ;
const HtmlEwbpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill','./src/js/index.js'], //Entry point indicates the final compilation point for all codes to be exported to production
    output : {
        path: path.resolve(__dirname,'dist') , //Production folder
        filename: 'js/bundle.js' ,      //File name in the production folder where all code is to be exported to
    },
    devServer: {
        contentBase: './dist' //Assigns the dist folder as folder holding all files to be deployed after production
    },
    plugins: [
        new HtmlEwbpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude:  /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    }
}