const path = require('path');

module.exports = {
    //mode: 'development',
    entry: './src/renderer.js',
    output: {
        filename: 'renderer-bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                // loads .html files
                test: /\.(html)$/,
                include: [path.resolve(__dirname, "src")],
                use: {
                    loader: "html-loader",
                },
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                include: [path.resolve(__dirname, "src")],
                use: "url-loader",
            },
            {
                test: /\.css$/i,
                include: [path.resolve(__dirname, "src")],
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, "src")],
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react'],
                    },
                },
                resolve: {
                    extensions: [".js", ".jsx", ".json"],
                },
            },
        ],
    },
};
